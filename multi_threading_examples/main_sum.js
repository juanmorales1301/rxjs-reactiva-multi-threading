
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

// Ejecutar varios Workers en paralelo
(async () => {
  const tasks = [
    { from: 1, to: 50 },
    { from: 51, to: 100 },
    { from: 101, to: 150 },
  ];

  const promises = tasks.map(task => runWorker('./worker_sum.js', task));

  try {
    const results = await Promise.all(promises); // Espera que todas las promesas se resuelvan
    const totalSum = results.reduce((acc, val) => acc + val, 0);
    console.log(`Resultados individuales: ${results}`);
    console.log(`Suma total: ${totalSum}`);
  } catch (error) {
    console.error("Error en uno de los Workers:", error.message);
  }
})();
