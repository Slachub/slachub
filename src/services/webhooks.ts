import { Request } from "express";
import * as crypto from "crypto";
import * as dotenv from "dotenv";

dotenv.config();

export const verifySignature = (req: Request) => {
    const WEBHOOK_SECRET: string | undefined = process.env.WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) 
        return;

    const signature: string | undefined = req.header("x-hub-signature");
    if (!signature)
        return;

    // Verify the signature
    const hmac = crypto.createHmac("sha1", WEBHOOK_SECRET);
    const calculatedSignature =
        "sha1=" + hmac.update(JSON.stringify(req.body)).digest("hex");
    return calculatedSignature === signature;
};
