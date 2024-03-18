import { NextFunction, Response, Request } from "express";
import BadRequestError from "../services/error_handler";
import { queueHook, verifySignature } from "../services/webhooks_service";
import * as slackService from "../services/slackService";

export const handleWebhook = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (verifySignature(req)) {
        const hook = await queueHook(req.body);
        if (hook) res.status(200).send("Success");
    } else {
        next(
            new BadRequestError(403, {
                message: "Unauthorised",
                details: req.body,
            })
        );
    }
};

export const sendToSlack = async (req: Request, res: Response) => {
    const payload = req.body;
    try {
        const status = await slackService.updateToSlack(payload);
        if (!status) {
            res.status(400).json(status);
        } else res.status(200).json(status);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};
