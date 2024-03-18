import { NextFunction, Response, Request } from "express";
import BadRequestError from "../services/error_handler";
import { queueHook, verifySignature } from "../services/webhooks_service";

export const handleWebhook = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (verifySignature(req)) {
        // const hook: Webhook = createHook(req.body);
        // QueueManager.getInstance().getQueue().enqueue(hook);
        const hook  = await queueHook(req.body);
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
