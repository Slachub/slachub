import {
    PR_HOOK_CLOSED_1,
    PR_HOOK_HEADER_1,
    PR_HOOK_OPENED_1,
} from "./fixtures";
import { Queue } from "../queue/queue";
import { Webhook, createHook } from "../models/webhook_model";
import { QueueManager, processQueue } from "../queue/queue_mgr";
import { addHookToMgr } from "../services/webhooks";

describe("adding to queue", () => {
    const queue: Queue<Webhook> = new Queue();
    const hook: Webhook = createHook({ action: PR_HOOK_OPENED_1.action });
    queue.enqueue(hook);

    expect(queue.peek()).toEqual(hook);
});

describe("test queue mgr", () => {
    const queue = QueueManager.getInstance().getQueue();
    const hook: Webhook = createHook({ action: PR_HOOK_OPENED_1.action });

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
        const hook: Webhook = await addHookToMgr(PR_HOOK_CLOSED_1);
        
        expect(hook.action).toEqual(PR_HOOK_CLOSED_1.action);
        expect(new Date(hook.receivedAt * 1000)).toBeInstanceOf(Date);
    });
});
