
const { of, throwError } = require('rxjs');
const { map, catchError } = require('rxjs/operators');

const observable = of(1, 2, 3, 4, 5).pipe(
  map(value => {
    if (value === 3) {
      throw new Error("Valor prohibido: 3"); // Simula un error
    }
    return value;
  }),
  catchError(error => {
    console.error("Error capturado:", error.message);
    return of("Valor por defecto");
  })
);

observable.subscribe(value => console.log(value));
