
const { from } = require('rxjs');
const { map } = require('rxjs/operators');

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Carlos" },
  { id: 3, name: "Beatriz" },
];

console.log("Transformando usuarios...");
from(users)
  .pipe(
    map(user => ({ ...user, name: user.name.toUpperCase() })) // Transforma el nombre a mayúsculas
  )
  .subscribe(result => console.log(result));
