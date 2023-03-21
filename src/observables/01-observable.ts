/* npm start */
import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("siguiente [next]: ", value),
  error: (error) => console.warn("error [obs]: ", error),
  complete: () => console.info("completado [obs]: "),
};

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");
  //Forzar un erros
  /* const a = undefined;
  a.nombre = "Diego"; */
  subs.next("Diego");
  subs.complete();
});

obs$.subscribe(observer);

/* obs$.subscribe({
  next: (valor) => console.log("next: ", valor),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("Completado"),
}); */
