import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada, erat nec lobortis tempor, lectus lectus rhoncus ligula, quis rhoncus massa lorem id mi. Nullam ac mauris semper est imperdiet auctor ut vitae dui. Etiam mattis rutrum metus, a tempus ipsum ultricies eget. In in finibus purus, bibendum dictum ligula. Proin pellentesque dolor eu erat mattis, et faucibus justo pretium. Duis ac finibus est. Quisque sed quam ornare diam commodo bibendum. Sed venenatis tristique fringilla.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet erat dui, congue condimentum orci dictum non. Sed dui justo, eleifend ut purus ut, sodales bibendum tellus. Cras feugiat mauris in est porttitor, at dapibus arcu rutrum. Nunc fringilla nisl mauris, ac bibendum ipsum posuere sit amet. Suspendisse elementum, eros vitae sollicitudin mattis, quam enim luctus velit, eget consequat neque enim quis elit. Curabitur elementum est a nulla fermentum tristique.
<br/><br/>
Proin et justo quis mauris blandit pretium. Sed nec commodo eros. In eu augue quis velit efficitur semper feugiat sed ante. Suspendisse dapibus nunc a lacus faucibus posuere. Donec vitae mi massa. Vestibulum pretium tellus sem, at euismod augue accumsan quis. Cras magna mauris, vulputate vitae mi eu, rutrum mollis nisi. Fusce vel dapibus odio, eget lobortis ex. Maecenas hendrerit feugiat tincidunt. Sed nunc nisl, facilisis a leo ut, volutpat egestas mi. Duis fermentum tellus et diam vehicula luctus condimentum nec lorem. Integer egestas, nulla in pretium tristique, lacus nisi viverra turpis, at gravida nunc sapien sed est.
<br/><br/>
Morbi pharetra, metus quis ultricies bibendum, urna dui dictum quam, quis mollis ex nisl vehicula nunc. Morbi id viverra dolor, eu tincidunt nulla. Mauris finibus quis quam sed semper. Maecenas vitae tincidunt metus, nec ultricies nisl. Nunc pretium nunc id magna euismod pharetra. Sed luctus dui eu egestas lacinia. Vestibulum vulputate venenatis lorem at sagittis. Praesent sagittis eros a dignissim pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Praesent fringilla varius quam varius rutrum.
<br/><br/>
Donec in odio sed eros accumsan accumsan id nec eros. Aliquam aliquam orci quis metus egestas, at vehicula nibh rhoncus. Integer posuere, velit sit amet ultrices ornare, sem nulla pellentesque nisl, id tincidunt mauris neque vel nisi. Vestibulum congue viverra rhoncus. Curabitur placerat luctus sem vel scelerisque. Quisque finibus augue vel massa mattis, sed congue diam porta. Aliquam sit amet ex vitae eros mattis pretium sed sagittis nisi. Donec eu risus nunc. Nullam feugiat ante vitae augue sollicitudin sodales. Morbi tincidunt orci nec erat pellentesque condimentum.
<br/><br/>
Donec in odio sed eros accumsan accumsan id nec eros. Aliquam aliquam orci quis metus egestas, at vehicula nibh rhoncus. Integer posuere, velit sit amet ultrices ornare, sem nulla pellentesque nisl, id tincidunt mauris neque vel nisi. Vestibulum congue viverra rhoncus. Curabitur placerat luctus sem vel scelerisque. Quisque finibus augue vel massa mattis, sed congue diam porta. Aliquam sit amet ex vitae eros mattis pretium sed sagittis nisi. Donec eu risus nunc. Nullam feugiat ante vitae augue sollicitudin sodales. Morbi tincidunt orci nec erat pellentesque condimentum.
<br/><br/>
Donec in odio sed eros accumsan accumsan id nec eros. Aliquam aliquam orci quis metus egestas, at vehicula nibh rhoncus. Integer posuere, velit sit amet ultrices ornare, sem nulla pellentesque nisl, id tincidunt mauris neque vel nisi. Vestibulum congue viverra rhoncus. Curabitur placerat luctus sem vel scelerisque. Quisque finibus augue vel massa mattis, sed congue diam porta. Aliquam sit amet ex vitae eros mattis pretium sed sagittis nisi. Donec eu risus nunc. Nullam feugiat ante vitae augue sollicitudin sodales. Morbi tincidunt orci nec erat pellentesque condimentum.
<br/><br/>
Donec in odio sed eros accumsan accumsan id nec eros. Aliquam aliquam orci quis metus egestas, at vehicula nibh rhoncus. Integer posuere, velit sit amet ultrices ornare, sem nulla pellentesque nisl, id tincidunt mauris neque vel nisi. Vestibulum congue viverra rhoncus. Curabitur placerat luctus sem vel scelerisque. Quisque finibus augue vel massa mattis, sed congue diam porta. Aliquam sit amet ex vitae eros mattis pretium sed sagittis nisi. Donec eu risus nunc. Nullam feugiat ante vitae augue sollicitudin sodales. Morbi tincidunt orci nec erat pellentesque condimentum.
<br/><br/>
Donec in odio sed eros accumsan accumsan id nec eros. Aliquam aliquam orci quis metus egestas, at vehicula nibh rhoncus. Integer posuere, velit sit amet ultrices ornare, sem nulla pellentesque nisl, id tincidunt mauris neque vel nisi. Vestibulum congue viverra rhoncus. Curabitur placerat luctus sem vel scelerisque. Quisque finibus augue vel massa mattis, sed congue diam porta. Aliquam sit amet ex vitae eros mattis pretium sed sagittis nisi. Donec eu risus nunc. Nullam feugiat ante vitae augue sollicitudin sodales. Morbi tincidunt orci nec erat pellentesque condimentum.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// Función que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  //map((event) => calcularPorcentajeScroll(event)),
  map(calcularPorcentajeScroll),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
