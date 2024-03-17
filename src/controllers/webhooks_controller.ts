import { NextFunction, Response, Request } from "express";
import { createHook, Webhook } from "../models/webhook_model";
import BadRequestError from "../services/error_handler";
import { verifySignature } from "../services/webhooks";


export const handleWebhook = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (verifySignature(req)) {
        const hook: Webhook = createHook(req);
        if(hook)
            res.status(200).send("Success");        
    } else {
        next(
            new BadRequestError(403, {
                message: "Unauthorised",
                details: req.body
            })
        );
    }
};
