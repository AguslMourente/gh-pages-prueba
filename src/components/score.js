import { state } from "../state.js";
export function Score() {
  const s = state.data.score;
  const el = document.createElement("div");
  el.className = "score";
  el.innerHTML = `<strong>Marcador</strong> · Vos: ${s.player} — CPU: ${s.cpu}`;
  return el;
}
