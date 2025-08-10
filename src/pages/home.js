import { state } from "../state.js";
import { Hand } from "../components/hand.js";
import { Score } from "../components/score.js";

export function HomePage() {
  const root = document.createElement("div");
  root.className = "page home";

  const h1 = document.createElement("h1");
  h1.textContent = "Piedra, Papel o Tijera";

  const p = document.createElement("p");
  p.textContent = "Elegí una opción para jugar contra la CPU:";

  const hands = document.createElement("div");
  hands.className = "hands";
  ["piedra","papel","tijera"].forEach((m)=>{
    hands.appendChild(
      Hand(m, ()=>{
        state.setPlayerMove(m);
        state.playRound();
        location.hash = "#/resultado";
      })
    );
  });

  root.append(h1, Score(), p, hands);
  return root;
}
