
const { Worker } = require('worker_threads');

// Función que ejecuta tareas en un Worker y devuelve una Promesa
function runWorker(filePath, workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(filePath, { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) {
        reject(new Error(`Worker finalizó con código: ${code}`));
      }
    });
  });
}

(async () => {
  const tasks = [
    { value: 5 },
    { value: -3 }, // Fallará
    { value: 10 },
  ];

  const promises = tasks.map(task => runWorker('./worker_error.js', task));

  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Tarea ${index + 1} resuelta: ${result.value}`);
    } else {
      console.error(`Tarea ${index + 1} fallida: ${result.reason.message}`);
    }
  });
})();
