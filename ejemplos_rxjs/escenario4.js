
const { fromEvent, interval, combineLatest } = require('rxjs');
const { map } = require('rxjs/operators');

const nameInput = document.getElementById("nameInput");

const nameObservable = fromEvent(nameInput, 'input').pipe(
  map(event => event.target.value)
);

const timeObservable = interval(2000); // Emite cada 2 segundos

combineLatest([nameObservable, timeObservable])
  .subscribe(([name, time]) => {
    console.log(`Nombre: ${name || "Desconocido"} - Tiempo: ${time}s`);
  });
