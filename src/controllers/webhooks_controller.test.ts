import request from "supertest";
import { app } from "../app";
import { Webhook } from "../models/webhook_model";
import * as slackService from "../services/slackService";
import * as logService from "../services/log";

jest.mock("../services/slackService");
jest.mock("../services/log");

afterEach(() => {
  jest.clearAllMocks();
});

const payload = [
  {
    action: "opened",
    pull_request: {
      number: 123456,
      title: "Update README.md",
      user: {
        login: "testuser",
        url: "https://users.githubusercontent.com/u/583231?v=1",
      },
      created_at: "2024-03-15T12:34:56Z",
      updated_at: "2024-03-16T12:34:56Z",
      body: "This is a pull request to update the README file.",
    },
  },
];

describe("POST payload data into Slack", () => {
  test("status code success 200 for sending updates to Slack", async () => {
    //Arrange
    const testPayload = payload[0].pull_request.body;
    // Act
    const response = await request(app)
      .post("/send-message-to-slack")
      .send({ message: testPayload });

    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "ok",
      message: "Message sent successfully",
    });
  });
});

const dummyLog = [];

describe("View a log of processed webhooks", () => {
  test("Return an empty array when nothing has been processed", async () => {
    // Arrange
    jest.spyOn(logService, "viewLog").mockResolvedValue([]);

    // Act
    const res = await request(app).get("/api/v1/log");

    // Assert
    expect(res.body).toEqual([]);
    expect(res.body.length).toEqual(0);
  });
});
