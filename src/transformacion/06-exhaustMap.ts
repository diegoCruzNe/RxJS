import { interval, fromEvent } from "rxjs";
import { take, exhaustMap } from "rxjs/operators";

const inteval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$.pipe(exhaustMap(() => inteval$)).subscribe(console.log);
