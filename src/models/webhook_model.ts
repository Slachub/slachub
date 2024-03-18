import { Request } from "express";
export interface Webhook {
    action: string
    receivedAt: number
}

export const createHook = (body: any): Webhook => {
    return {
        action: body.action,
        receivedAt: Date.now()
    }
}