import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1, "1", 1, 2, 2, 3, 3, 4, 5, 1, "1");

numeros$
  .pipe(distinct())
  .subscribe
  // console.log
  ();

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "megaman" },
  { nombre: "x" },
  { nombre: "zero" },
  { nombre: "willy" },
  { nombre: "zero" },
];

from(personajes)
  .pipe(distinct((p) => p.nombre))
  .subscribe(console.log);
