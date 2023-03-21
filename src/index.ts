import { fromEvent, Observable } from "rxjs";
import {
  debounceTime,
  map,
  mergeAll,
  mergeMap,
  switchMap,
} from "rxjs/operators";

import { ajax } from "rxjs/ajax";

import { GithubUser } from "./interfaces/github-user.interface";
import { GithubUsersResp } from "./interfaces/github-users.interface";

// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
  orderList.innerHTML = "";
  console.log(usuarios);

  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "ver pagina";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  map<KeyboardEvent, string>((ev) => ev.target["value"]),
  mergeMap<string, Observable<GithubUsersResp>>((texto) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
  ),
  map<GithubUsersResp, GithubUser[]>((eve) => eve["items"])
);
// .subscribe(mostrarUsuarios);

const url = "https://httpbin.org/delay/1?arg=";
input$
  .pipe(
    map((ev) => ev.target["value"]),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
