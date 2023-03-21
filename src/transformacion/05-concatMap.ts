import { interval, fromEvent } from "rxjs";
import { take, switchMap, concatMap } from "rxjs/operators";

const inteval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$.pipe(concatMap(() => inteval$)).subscribe(console.log);
