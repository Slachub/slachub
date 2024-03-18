import { NextFunction, Response, Request } from "express";
import BadRequestError from "../services/error_handler";

import * as slackService from "../services/slackService";

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
