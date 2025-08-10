import { HomePage } from "./pages/home.js";
import { ResultPage } from "./pages/result.js";

const routes = { "#/": HomePage, "#/resultado": ResultPage };

function render() {
  const hash = location.hash || "#/";
  const page = routes[hash] || HomePage;
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(page());
}

export function initRouter() {
  addEventListener("hashchange", render);
  render();
}
