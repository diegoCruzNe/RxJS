import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("completado"),
};

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);

// Inicia en 2 segundos y despues cada segundo
//const timer$ = timer(2000, 1000);

const timer$ = timer(hoyEn5);

console.log("Inicio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");
