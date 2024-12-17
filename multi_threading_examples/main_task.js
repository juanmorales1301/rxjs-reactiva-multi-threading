
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

// Ejecutar múltiples Workers en paralelo con manejo de fallos
(async () => {
  const tasks = [
    { taskName: "Tarea 1", duration: 2000 },
    { taskName: "Tarea 2", duration: 1000 },
    { taskName: "Tarea 3", duration: 3000 },
    { taskName: "Tarea Fallida", duration: -1 }, // Provoca un fallo
  ];

  const promises = tasks.map(task => runWorker('./worker_task.js', task));

  const results = await Promise.allSettled(promises); // Maneja resultados resueltos y rechazados

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Tarea ${index + 1} completada: ${result.value}`);
    } else {
      console.error(`Tarea ${index + 1} fallida: ${result.reason.message}`);
    }
  });
})();
