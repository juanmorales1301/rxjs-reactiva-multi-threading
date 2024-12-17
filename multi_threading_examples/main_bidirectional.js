
const { Worker } = require('worker_threads');

// Función que envía datos al Worker y espera la respuesta
function sendToWorker(worker, message) {
  return new Promise((resolve, reject) => {
    worker.once('message', resolve); // Resuelve cuando el Worker responde
    worker.once('error', reject); // Maneja errores del Worker
    worker.postMessage(message); // Envía datos al Worker
  });
}

(async () => {
  const worker = new Worker('./worker_bidirectional.js');

  const tasks = [
    { operation: "multiply", num1: 2, num2: 3 },
    { operation: "add", num1: 5, num2: 10 },
    { operation: "unknown", num1: 1, num2: 1 }, // Operación inválida
  ];

  const promises = tasks.map(task => sendToWorker(worker, task));

  try {
    const results = await Promise.all(promises);
    console.log("Resultados:", results);
    worker.terminate(); // Finaliza el Worker después de las tareas
  } catch (error) {
    console.error("Error en la comunicación:", error.message);
    worker.terminate();
  }
})();
