import { seeded } from './noise.js';
export function createCity(seed=1){const r=seeded(seed), buildings=[]; for(let i=0;i<34;i++) buildings.push({x:(i*173)%2100-1050,z:100+(i%5)*115,h:45+r()*150,w:65+r()*75,c:['#e5a779','#e9d2a8','#cb8469','#70a9a0'][i%4]}); return {buildings, palmXs:Array.from({length:18},(_,i)=>-850+i*100), name:'Solara Bay'};}
