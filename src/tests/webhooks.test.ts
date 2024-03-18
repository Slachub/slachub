import request from "supertest";
import { app } from "../app";
import {PR_HOOK_HEADER_1, PR_HOOK_OPENED_1 } from "./fixtures";
import * as dotenv from "dotenv";

dotenv.config();

jest.mock("../services/webhooks");

afterEach(() => {
    jest.clearAllMocks();
});

test("bad github hook authentication", async () => {
    const WEBHOOK_SECRET: string | undefined = process.env.WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) throw new Error("Secret undefined");

    const res = await request(app)
        .post("/api/v1/hooks")
        .set("x-hub-signature", "BAD SECRET")
        .send(PR_HOOK_OPENED_1);

    expect(res.statusCode).toEqual(403);
});

test("Verified github hook authentication", async () => {
    const res = await request
        .agent(app)
        .set("x-hub-signature", PR_HOOK_HEADER_1['X-Hub-Signature'])
        .post("/api/v1/hooks")
        .expect(({headers}) => {
            console.log(headers);
        })
        .send(PR_HOOK_OPENED_1);
    expect(res.statusCode).toEqual(200);
});

