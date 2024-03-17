import { Request } from "express";
import * as crypto from "crypto";
import * as dotenv from "dotenv";

dotenv.config();

export const verifySignature = (req: Request) => {
    const WEBHOOK_SECRET: string | undefined = process.env.WEBHOOK_SECRET
    if(!WEBHOOK_SECRET) throw new Error("Secret undefined");

    let signature = req.header('X-Hub-Signature')

    // Verify the signature
    let hmac = crypto.createHmac("sha1", WEBHOOK_SECRET)
    let calculatedSignature = "sha1=" + hmac.update(JSON.stringify(req.body)).digest("hex");

    return calculatedSignature !== signature        
};
