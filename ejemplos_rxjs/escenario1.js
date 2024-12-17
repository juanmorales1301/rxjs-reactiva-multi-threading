
const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

console.log("Inicio del Observable básico");

const observable = interval(1000).pipe(take(5)); // Emite un número cada segundo, 5 veces.

observable.subscribe({
  next: value => console.log(`Valor emitido: ${value}`),
  complete: () => console.log("¡Observable completado!")
});
