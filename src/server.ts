import { app } from "./app";
import { processQueue } from "./queue/queue_mgr";

// Start the worker function
processQueue().catch(err => {
    console.error('Error in worker:', err);
  });


app.listen(3000, () => {
  console.log("Express server started on port 3000");
});
