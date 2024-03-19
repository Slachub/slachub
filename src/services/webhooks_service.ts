import { Request } from "express";
import * as crypto from "crypto";
import * as dotenv from "dotenv";
import { Webhook, createHook } from "../models/webhook_model";
import { QueueManager } from "./queue_mgr_service";

dotenv.config();
const queue = QueueManager.getInstance().getQueue();


export const verifySignature = (req: Request) => {
    const WEBHOOK_SECRET: string | undefined = process.env.WEBHOOK_SECRET;
    console.log(`Inside webhook secret ${WEBHOOK_SECRET}`)
    if (!WEBHOOK_SECRET) 
        return;
    return true

    // const signature: string | undefined = req.header("x-hub-signature");
    // console.log(`Inside singnature  ${signature}`)

    // if (!signature)
    //     return;

    // // Verify the signature
    // const hmac = crypto.createHmac("sha1", WEBHOOK_SECRET);
    // const calculatedSignature =
    //     "sha1=" + hmac.update(JSON.stringify(req.body)).digest("hex");
    //     console.log(`calculated singnature  ${calculatedSignature}`)
    // return calculatedSignature === signature;
};

export const queueHook = async (body: any, headers?: any): Promise<Webhook> => {
    console.log('Inside queue hook')
    console.log(body)
    const hook: Webhook = createHook(body);
    queue.enqueue(hook);
    return hook;
}