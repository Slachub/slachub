import { NextFunction, Response, Request } from "express";
import BadRequestError from "../services/error_handler";
import { addHookToMgr, verifySignature } from "../services/webhooks";

export const handleWebhook = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (verifySignature(req)) {
        // const hook: Webhook = createHook(req.body);
        // QueueManager.getInstance().getQueue().enqueue(hook);
        const hook  = await addHookToMgr(req.body);
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
