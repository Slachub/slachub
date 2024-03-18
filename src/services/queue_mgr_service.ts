import { Webhook } from "../models/webhook_model";
import { Queue } from "../models/queue_model";

// Singleton pattern for Queue instance
export class QueueManager {
    private static instance: QueueManager;
    private queue: Queue<Webhook>;
    private processedHooks: Array<Webhook>;

    private constructor() {
        this.queue = new Queue<Webhook>(); 
        this.processedHooks =  new Array<Webhook>();
    }

    public static getInstance(): QueueManager {
        if (!QueueManager.instance) {
            QueueManager.instance = new QueueManager();
        }
        return QueueManager.instance;
    }

    public getQueue(): Queue<Webhook> {
        return this.queue;
    }

    public getProcessedHooks(): Array<Webhook> {
        return this.processedHooks;
    }
}

// Worker function to process items from the queue
export const processQueue = async (): Promise<void> => {
    console.log("Starting Queue Mgr...");
    const queue = QueueManager.getInstance().getQueue();

    while (true) {
        if (!queue.isEmpty()) {
            const item = queue.dequeue();
            if (item) {
                QueueManager.getInstance().getProcessedHooks().push(item);
                
                console.log("Processing item:", item);
            }
        }
        await new Promise((resolve) => setTimeout(resolve, 250)); // Process item every 250ms. Can remove when system is oerational.
    }
};
