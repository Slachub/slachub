import request from "supertest";
import { app } from "../app";
import { Webhook } from "../models/webhook_model";
import * as slackService from "../services/slackService";


jest.mock("../services/slackService");

afterEach(() => {
	jest.clearAllMocks();
});

const payload = [{
    "action": "opened",
    "pull_request": {
      "number": 123456,
      "title": "Update README.md",
      "user": {
        "login": "testuser",
        "url": "https://users.githubusercontent.com/u/583231?v=1"
      },
      "created_at": "2024-03-15T12:34:56Z",
      "updated_at": "2024-03-16T12:34:56Z",
      "body": "This is a pull request to update the README file."     
      }}]

describe("POST payload data into Slack", () => {
	test("status code success 200 for sending updates to Slack", async () => {
        //Arrange
        const testPayload = payload[0].pull_request.body
       	// Act
           const response = await request(app)
           .post('/send-message-to-slack')
           .send({message : testPayload});

		// Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
          status: 'ok',
          message: 'Message sent successfully'
        });
	});
});