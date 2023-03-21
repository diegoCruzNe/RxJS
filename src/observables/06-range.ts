import { asyncScheduler, concat, of, range } from "rxjs";

//const src$ = of(1, 2, 3, 4, 5);
//const src$ = range(-5, 10);
const src$ = concat(range(-5, 10), asyncScheduler);

console.log("Inicio");
src$.subscribe(console.log);
console.log("Fin");
