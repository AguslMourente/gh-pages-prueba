export function Hand(move, onPick) {
  const map = { piedra: "✊", papel: "✋", tijera: "✌️" };
  const btn = document.createElement("button");
  btn.className = "hand";
  btn.textContent = map[move];
  btn.title = move;
  btn.addEventListener("click", onPick);
  return btn;
}
