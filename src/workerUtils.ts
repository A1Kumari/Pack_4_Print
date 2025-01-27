import { endpointSymbol } from "vite-plugin-comlink/symbol";
import { wrap, Remote } from "comlink";

// Define the type for your worker module
type WorkerType = typeof import("./worker/worker");

// Worker instance type
let workerInstance: Remote<WorkerType> & { readonly [key in typeof endpointSymbol]: Worker };

// Function to create a worker instance
export function createWorkerInstance() {
    // Terminate the previous worker instance
    terminateWorkerInstance();

    // Create a new worker and wrap it with Comlink
    const worker = new Worker(new URL("./worker/worker", import.meta.url), { type: "module" });
    workerInstance = wrap<WorkerType>(worker) as Remote<WorkerType> & { readonly [key in typeof endpointSymbol]: Worker };

    // Return the worker's endpoint
    return workerInstance[endpointSymbol];
}

// Function to terminate the worker instance
export function terminateWorkerInstance() {
    if (workerInstance?.[endpointSymbol]) {
        workerInstance[endpointSymbol].terminate();
    }
}
