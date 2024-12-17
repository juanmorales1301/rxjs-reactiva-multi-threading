
const { workerData, parentPort } = require('worker_threads');

// Realiza la suma en el hilo secundario
const { from, to } = workerData;

let sum = 0;
for (let i = from; i <= to; i++) {
  sum += i;
}

// Devuelve el resultado al hilo principal
parentPort.postMessage(sum);
