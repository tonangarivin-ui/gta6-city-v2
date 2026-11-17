export const MODELS=[{name:'Coral Cabrio',color:'#f16f59',speed:1.15},{name:'Marina Coupe',color:'#e9ca79',speed:1},{name:'Bluebird Taxi',color:'#5c9eb1',speed:.82}];
export function createTraffic(){return Array.from({length:12},(_,i)=>({x:-560+i*100,z:i%2?40:-70,color:MODELS[i%3].color,speed:45+i%3*9,phase:i}));}
