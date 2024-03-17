import request from "supertest";
import { app } from '../app';
import { getHookData } from "./fixtures.";

jest.mock("../services/webhooks");

afterEach(() => {
	jest.clearAllMocks();
});
test.only("bad github hook authentication", async () => {

    const WEBHOOK_SECRET: string | undefined = process.env.WEBHOOK_SECRET;
    if(!WEBHOOK_SECRET) throw new Error("Secret undefined");

   // Arrange - we can enforce throwing an exception by mocking the implementation
		// jest.spyOn(hookService, "verifySignature").mockImplementation(() => {
		// 	new BadRequestError(403, {
        //         message: "Unauthorised"
        //     });
		// });

		// Act
		const res = await request(app)
            .post("/api/v1/hooks")
            .set('x-hub-signature', WEBHOOK_SECRET)
			.send(getHookData()); 

		// Assert
		expect(res.statusCode).toEqual(403);

});