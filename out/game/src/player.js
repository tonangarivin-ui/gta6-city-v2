export function createPlayer(){return {x:0,z:0,angle:0,health:88,cash:2480,inCar:false,speed:0,fire:0};}
export function movePlayer(p,keys,dt){const v=p.inCar?330:keys.has('Shift')?220:150; let dx=(keys.has('d')?1:0)-(keys.has('a')?1:0),dz=(keys.has('s')?1:0)-(keys.has('w')?1:0); p.x+=dx*v*dt;p.z+=dz*v*dt;if(dx||dz)p.angle=Math.atan2(dx,-dz); if(p.inCar)p.speed=v;}
