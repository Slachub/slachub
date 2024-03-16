import {Response, Request} from 'express';
import * as crypto from "crypto";

const WEBHOOK_SECRET: string = process.env.WEBHOOK_SECRET;

const verify_signature = (req: Request) => {
  const signature = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(JSON.stringify(req.body))
    .digest("hex");
  let trusted = Buffer.from(`sha256=${signature}`, 'ascii');
  let untrusted =  Buffer.from(req.headers.get("x-hub-signature-256"), 'ascii');
  return crypto.timingSafeEqual(trusted, untrusted);
};

export const handleWebhook = (req: Request, res: Response) => {
  if (!verify_signature(req)) {
    res.status(401).send("Unauthorized");
    return;
  }  
  res.status(200).send("Success");
  return 
};
