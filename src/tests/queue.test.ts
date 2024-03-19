import {
    PR_HOOK_CLOSED_1,
    PR_HOOK_OPENED_1,
} from "./fixtures";
import { Queue } from "../models/queue_model";
import { Webhook, createHook} from "../models/webhook_model";
import { QueueManager, processQueue } from "../services/queue_mgr_service";
import { queueHook } from "../services/webhooks_service";

describe("adding to queue", () => {
    const queue: Queue<Webhook> = new Queue();
    const hook: Webhook = createHook({ action: PR_HOOK_OPENED_1.action });
    queue.enqueue(hook);

    expect(queue.peek()).toEqual(hook);
});

describe("test queue mgr", () => {
    const queue = QueueManager.getInstance().getQueue();
    const hook: Webhook = createHook({ action: PR_HOOK_OPENED_1});

    it("should have one item in the queue", () => {
        queue.enqueue(hook);
        expect(queue.peek()).toEqual(hook);
    });

    it("should have one item in the queue", () => {
        expect(queue.peek()).toEqual(hook);
        processQueue();
        expect(queue.isEmpty());
    });
});

describe("integration test of addHookToMgr", () => {
    it("should return a valid hook", async () => {
        const hook: Webhook = await queueHook(PR_HOOK_CLOSED_1);
        
        expect(hook.action).toEqual(PR_HOOK_CLOSED_1.action);
        expect(new Date(hook.receivedAt * 1000)).toBeInstanceOf(Date);
    });
});
