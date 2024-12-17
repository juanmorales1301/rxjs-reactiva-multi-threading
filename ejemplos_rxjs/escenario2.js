
const { fromEvent } = require('rxjs');
const { map, filter, debounceTime } = require('rxjs/operators');

const inputElement = document.getElementById("inputFilter");
const listElement = document.getElementById("filteredList");

fromEvent(inputElement, 'input')
  .pipe(
    debounceTime(300), // Evita emisiones rápidas
    map(event => event.target.value),
    filter(value => value.length > 3) // Filtra textos con más de 3 letras
  )
  .subscribe(value => {
    const li = document.createElement("li");
    li.textContent = value;
    listElement.appendChild(li);
  });
