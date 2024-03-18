import request from "supertest";
import { app } from '../app';

jest.mock("../services/webhooks_service");

afterEach(() => {
	jest.clearAllMocks();
});

test("status code successfully 404 for a book that is not found", async () => {
    // Act
    const res = await request(app).get("/api/v1/wrong/url");

    // Assert
    expect(res.statusCode).toEqual(404);
});

