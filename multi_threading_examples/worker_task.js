
const { workerData, parentPort } = require('worker_threads');

// Simula una tarea con duración variable
const { taskName, duration } = workerData;

if (duration < 0) {
  throw new Error(`${taskName} falló: Duración inválida`);
}

setTimeout(() => {
  parentPort.postMessage(`${taskName} completada en ${duration}ms`);
}, duration);
