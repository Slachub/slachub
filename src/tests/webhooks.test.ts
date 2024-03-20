import * as dotenv from "dotenv";
import { verifySignature } from "../services/webhooks_service";
import request from "supertest";
import { app } from "../app";
import * as logService from "../services/log";

import { Joke, fetchJoke } from "../services/joke_service";
import { updateToSlack } from "../services/slack_service"; // Replace 'your_file_name' with the actual file name
import {
  JOKE_1,
  PR_HOOK_HEADER_1,
  PR_HOOK_OPENED_1,
  WEBHOOK_JSON_STR_1,
} from "./fixtures";

dotenv.config();

jest.mock("../services/joke_service", () => ({
  fetchJoke: jest.fn(),
}));

describe("verifySignature", () => {

  it("bad github hook authentication", () => {
    process.env.WEBHOOK_SECRET = "bad secret";
    const mockRequest = {
      body: PR_HOOK_OPENED_1,
      headers: { "x-hub-signature": PR_HOOK_HEADER_1["X-Hub-Signature"] },
    } as const;

    const result: boolean | undefined = verifySignature(mockRequest);

    expect(result).toBe(false);
  });

  it("Verified github hook authentication", () => {
    process.env.WEBHOOK_SECRET = "secret";
    const mockRequest = {
      body: PR_HOOK_OPENED_1,
      headers: { "x-hub-signature": PR_HOOK_HEADER_1["X-Hub-Signature"] },
    } as const;

    const result = verifySignature(mockRequest);

    expect(result).toBe(true);
  });
});

describe("updateToSlack function", () => {
  process.env.SLACK_WEBHOOK_URL = "https://fake.slack.url";

  it("should send formatted data to Slack with a joke if available", async () => {
    const mockedPayload = WEBHOOK_JSON_STR_1;

    const mockedJoke: Joke = JOKE_1;

    const expectedBody = "{\"text\":\"💡 There's been a new *Pull Request* closed by Ramya called _<https://github.com/slachub|slachub>_ in the slachub repo. Nice work!\\n *Joke of the PR* 🤖 Which song would an exception sing? ... 👉 Can't catch me - Avicii 🤣🙄\"}";

    const responseMock = {
        status: 200,
        body: expectedBody
    };

    global.fetch = jest.fn().mockResolvedValueOnce(responseMock);
    (fetchJoke as jest.Mock) = jest.fn().mockResolvedValueOnce(mockedJoke);

    const result = await updateToSlack(mockedPayload);

    expect(result).toBe(true);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://fake.slack.url",
      expect.objectContaining({
        method: "POST",
        body: expectedBody,
        headers: {"Content-Type": "application/json"}
      })
    );
  });

  it("should throw an error if fetch fails", async () => {
    const mockedPayload = JSON.stringify(PR_HOOK_OPENED_1);

    const errorMock = new Error("Failed to fetch");

    global.fetch = jest.fn().mockRejectedValueOnce(errorMock);

    await expect(updateToSlack(mockedPayload)).rejects.toThrow(
      "Failed to send data to Slack"
    );
  });
});

// const payload = [
//   {
//     action: "opened",
//     pull_request: {
//       number: 123456,
//       title: "Update README.md",
//       user: {
//         login: "testuser",
//         url: "https://users.githubusercontent.com/u/583231?v=1",
//       },
//       created_at: "2024-03-15T12:34:56Z",
//       updated_at: "2024-03-16T12:34:56Z",
//       body: "This is a pull request to update the README file.",
//     },
//   },
// ];

// describe("POST payload data into Slack", () => {
//   test("status code success 200 for sending updates to Slack", async () => {
//     //Arrange
//     const testPayload = payload[0].pull_request.body;
//     // Act
//     const response = await request(app)
//       .post("/api/v1/hooks")
//       .send({ message: testPayload });

//     // Assert
//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({
//       status: "ok",
//       message: "Message sent successfully",
//     });
//   });
// });

describe("View a log of processed webhooks", () => {
  test("Return empty arrays when nothing has been processed", async () => {
    // Arrange
    jest.spyOn(logService, "viewLog").mockResolvedValue({
      processedHooks: [],
      receivedHooks: [],
    });

    // Act
    const res = await request(app).get("/api/v1/log");

    // Assert
    expect(res.body).toEqual({
      processedHooks: [],
      receivedHooks: [],
    });
  });
});
