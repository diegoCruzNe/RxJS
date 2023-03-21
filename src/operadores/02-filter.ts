import { from, fromEvent, of, range } from "rxjs";
import { filter, map } from "rxjs/operators";

range(20, 30).pipe(
  filter((val, i) => {
    console.log("index", i);
    return val % 2 === 1;
  })
);
//.subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "batman",
  },
  {
    tipo: "heroe",
    nombre: "robin",
  },
  {
    tipo: "villano",
    nombre: "jocker ",
  },
];

from(personajes).pipe(filter((val) => val.tipo !== "heroe"));
//.subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter")
);
keyUp$.subscribe(console.log);
