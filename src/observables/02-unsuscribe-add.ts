import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado: "),
};

const intervalo$ = new Observable<number>((subs) => {
  let num = 0;
  const interval = setInterval(() => {
    num++;
    subs.next(num);
    console.log(num);
  }, 1000);

  setTimeout(() => {
    subs.complete;
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();

  console.log("Completado timeout");
}, 6000);
