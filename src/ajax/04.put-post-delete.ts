import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

/* ajax
  .put(
    url,
    {
      id: 1,
      nombre: "diego",
    },
    { "mi-token": "ABC123" }
  )
  .subscribe(console.log); */

ajax({
  url,
  method: "GET",
  headers: {
    "mi-token": "ABC123",
  },
  body: {
    id: 1,
    nombre: "Diego",
  },
}).subscribe(console.log);
