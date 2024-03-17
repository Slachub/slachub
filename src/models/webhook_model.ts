import { Request } from "express";
export interface Webhook {
    action: string
    receivedAt: number
}

export const createHook = (req: Request): Webhook => {
    return {
        action: req.body?.action,
        receivedAt: Date.now()
    }
}