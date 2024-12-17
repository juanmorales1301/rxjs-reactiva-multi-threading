
const { parentPort } = require('worker_threads');

// Escucha mensajes del hilo principal
parentPort.on('message', message => {
  const { operation, num1, num2 } = message;
  let result;

  switch (operation) {
    case "multiply":
      result = num1 * num2;
      break;
    case "add":
      result = num1 + num2;
      break;
    default:
      result = null;
  }

  // Devuelve la respuesta al hilo principal
  parentPort.postMessage({ result });
});
