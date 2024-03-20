import { PR_HOOK_OPENED_1 } from "./fixtures";
import { Queue } from "../models/queue_model";
import { Webhook, createHook } from "../models/webhook_model";
import { QueueManager, processQueue } from "../services/queue_mgr_service";
import { queueHook } from "../services/webhooks_service";

jest.mock("../services/joke_service");
jest.mock("../services/slack_service", () => ({
  // Don't call Slack during these tests
  updateToSlack: jest.fn(),
}));

describe("adding to queue", () => {
  it("should add to queue", () => {
    const queue: Queue<Webhook> = new Queue();
    const hook: Webhook = createHook(PR_HOOK_OPENED_1);
    queue.enqueue(hook);

    expect(queue.peek()).toEqual(hook);
  });
});

describe("test queue mgr", () => {
  it("should have one item in the queue", () => {
    const queue = QueueManager.getInstance().getQueue();
    const hook: Webhook = createHook(PR_HOOK_OPENED_1);
    queue.enqueue(hook);
    expect(queue.peek()).toEqual(hook);
  });

  it("should have an empty queue after processsing", async () => {
    const queue = QueueManager.getInstance().getQueue();
    const hook: Webhook = createHook(PR_HOOK_OPENED_1);
    queue.enqueue(hook);

    expect(queue.peek()).toEqual(hook);
    processQueue();
    expect(queue.isEmpty());
  });
});

describe("integration test of addHookToMgr", () => {
  it("should return a valid hook", async () => {
    const hook: Webhook = await queueHook(PR_HOOK_OPENED_1);

    expect(hook.action).toEqual(PR_HOOK_OPENED_1.action);
    expect(new Date(hook.created_at)).toBeInstanceOf(Date);
  });
});
