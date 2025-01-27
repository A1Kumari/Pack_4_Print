import * as Comlink from "comlink";

// Define the type for your worker module
type WorkerType = {
    doWork: (data: string) => Promise<string>; // Adjust the type based on your worker's exposed API
};

// Worker instance type
let workerInstance: Comlink.Remote<WorkerType> | null = null;

// Function to create a worker instance
export function createWorkerInstance() {
    // Terminate the previous worker instance if it exists
    terminateWorkerInstance();

    // Create a new worker and wrap it with Comlink
    const worker = new Worker(new URL("./worker/worker", import.meta.url), { type: "module" });
    workerInstance = Comlink.wrap<WorkerType>(worker);

    return workerInstance;
}

// Function to terminate the worker instance
export function terminateWorkerInstance() {
    if (workerInstance) {
        // Terminate the worker if it exists
        (workerInstance as unknown as Worker).terminate();
        workerInstance = null;
    }
}
