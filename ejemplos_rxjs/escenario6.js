
const { Observable } = require('rxjs');

const customObservable = new Observable(observer => {
  observer.next("Primer valor");
  setTimeout(() => observer.next("Segundo valor"), 1000);
  setTimeout(() => observer.next("Tercer valor"), 2000);
  setTimeout(() => observer.complete(), 2500);
});

customObservable.subscribe({
  next: value => console.log("Emitido:", value),
  complete: () => console.log("¡Observación completada!")
});
