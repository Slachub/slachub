import { NextFunction, Response, Request } from "express";
import { Webhook } from "../models/webhook_model";
import BadRequestError from "../services/error_handler";


export const handleWebhook: Webhook = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (verify_signature(req)) {
        const hook: Webhook = Webhook.createHook(req);
        res.status(200).send("Success");
        return hook;
    } else {
        next(
            new BadRequestError(403, {
                message: "Unauthorised"
            })
        );
    }
};
