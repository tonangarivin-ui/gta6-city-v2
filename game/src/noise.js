export function seeded(seed=1){ let n=seed>>>0; return ()=>{ n=(n+0x6D2B79F5)|0; let t=Math.imul(n^(n>>>15),1|n); t^=t+Math.imul(t^(t>>>7),61|t); return ((t^(t>>>14))>>>0)/4294967296; }; }
export function valueNoise(x,y,seed=1){ const n=Math.sin(x*127.1+y*311.7+seed*74.7)*43758.5453; return n-Math.floor(n); }
