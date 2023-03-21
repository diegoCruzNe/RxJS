import { fromEvent } from "rxjs";
import { debounceTime, map, pluck, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(debounceTime(3000));
// .subscribe(console.log);

// Ejemplo 2
const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent<any>(input, "keyup");

input$
  .pipe(
    debounceTime(1000),
    map((x) => x.target.value),
    distinctUntilChanged()
  )
  .subscribe((val) => console.log(val));
