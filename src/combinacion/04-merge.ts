import { fromEvent, merge } from "rxjs";
import { map } from "rxjs/operators";

const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

merge(
  keyup$.pipe(map((ev) => ev.type)),
  click$.pipe(map((ev) => ev.type))
).subscribe(console.log);
