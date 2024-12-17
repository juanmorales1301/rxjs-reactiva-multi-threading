
const { workerData, parentPort } = require('worker_threads');

const { value } = workerData;

if (value < 0) {
  throw new Error("El valor no puede ser negativo");
} else {
  parentPort.postMessage(`Valor procesado: ${value}`);
}
