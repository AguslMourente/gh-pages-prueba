import { state } from "../state.js";
import { Score } from "../components/score.js";

export function ResultPage() {
  const { last } = state.data;

  const root = document.createElement("div");
  root.className = "page result";

  const h1 = document.createElement("h1");
  let cls = "result-draw", msg = "Empate";
  if (last.result === "ganaste") (cls="result-ok", msg="¡Ganaste!");
  if (last.result === "perdiste") (cls="result-bad", msg="Perdiste");
  h1.className = cls;
  h1.textContent = msg;

  const p = document.createElement("p");
  p.textContent = `Vos: ${last.player ?? "-"} | CPU: ${last.cpu ?? "-"}`;

  const btns = document.createElement("div");
  btns.className = "buttons";
  const again = document.createElement("button");
  again.textContent = "Jugar de nuevo";
  again.onclick = () => (location.hash = "#/");

  const reset = document.createElement("button");
  reset.textContent = "Reiniciar marcador";
  reset.onclick = () => { state.resetScore(); location.reload(); };

  btns.append(again, reset);
  root.append(h1, p, Score(), btns);
  return root;
}
