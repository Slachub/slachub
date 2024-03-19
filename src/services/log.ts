import { QueueManager } from "./queue_mgr_service";

export const viewLog = async () => {
  const manager = QueueManager.getInstance();
  const status = {
    processedHooks: manager.getProcessedHooks(),
    receivedHooks: manager.getReceivedHooks(),
  };
  return status;
};
