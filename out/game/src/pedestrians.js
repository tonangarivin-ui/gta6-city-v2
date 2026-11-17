export function createPedestrians(){return Array.from({length:16},(_,i)=>({x:-500+i*66,z:145+(i%3)*38,phase:i,panic:0,color:['#273b4a','#7c4d50','#f2cf9d'][i%3]}));}
export function scatter(peds){for(const p of peds)p.panic=2.8;}
