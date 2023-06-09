import { of, from } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numeros$ = of(1, "1", 1, 2, 2, 3, 3, 4, 5, 1, "1");

numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "megaman" },
  { nombre: "megaman" },
  { nombre: "zero" },
  { nombre: "willy" },
  { nombre: "zero" },
  { nombre: "zero" },
];

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log);
