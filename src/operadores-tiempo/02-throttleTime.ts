import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, map, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000)); //.subscribe(console.log);

// Ejemplo 2
const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<any>(input, "keyup");

input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: false,
      trailing: true,
    }),
    map((x) => x.target.value),
    distinctUntilChanged()
  )
  .subscribe((val) => console.log(val));
