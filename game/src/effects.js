export function createEffects(){return {particles:[],marks:[]};}
export function burst(e,x,y,color='#f6bd62'){for(let i=0;i<10;i++)e.particles.push({x,y,vx:(Math.random()-.5)*90,vy:-Math.random()*90,life:.5,color});}
export function drawEffects(ctx,e,dt){for(const p of e.particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;ctx.globalAlpha=Math.max(0,p.life*2);ctx.fillStyle=p.color;ctx.fillRect(p.x,p.y,4,4)}e.particles=e.particles.filter(p=>p.life>0);ctx.globalAlpha=1;}
