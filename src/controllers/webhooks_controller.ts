import { NextFunction, Response, Request } from "express";
import { Webhook } from "../models/webhook_model";
import BadRequestError from "../services/error_handler";
import * as slackService from "../services/slackService";
import { error } from "console";


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

export const sendToSlack = async (req: Request, res: Response) => {
	const payload = req.body;
	try{		
	 const status = await slackService.updateToSlack(payload);	 
	  if(!status) {
         res.status(400).json(error)
	  } else
	     res.status(200).json(status);
	} catch (error) {
		res.status(400).json({ message: (error as Error).message });
	}
};
