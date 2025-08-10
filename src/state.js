const STORAGE_KEY = "ppt-state-v1";

const state = {
  data: {
    score: { player: 0, cpu: 0 },
    last: { player: null, cpu: null, result: null },
  },

  setPlayerMove(move) { this.data.last.player = move; },

  playRound() {
    const cpu = randMove();
    this.data.last.cpu = cpu;
    const res = winner(this.data.last.player, cpu);
    this.data.last.result = res;
    if (res === "ganaste") this.data.score.player++;
    else if (res === "perdiste") this.data.score.cpu++;
    this.save();
  },

  resetScore() { this.data.score = { player: 0, cpu: 0 }; this.save(); },

  load() {
    try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) this.data = saved; } catch {}
  },

  save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data)); },
};

function randMove(){ return ["piedra","papel","tijera"][(Math.random()*3)|0]; }

function winner(p,c){
  if(p===c) return "empate";
  if((p==="piedra"&&c==="tijera")||(p==="papel"&&c==="piedra")||(p==="tijera"&&c==="papel")) return "ganaste";
  return "perdiste";
}

export { state };
