import { from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

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

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
