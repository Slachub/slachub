import { QueueManager } from "./queue_mgr_service";

export const viewLog = async () => {
  const queue = QueueManager.getInstance();
  const status = {
    processedHooks: queue.getProcessedHooks(),
    receivedHooks: queue.getReceivedHooks(),
  };
  return status;
};
