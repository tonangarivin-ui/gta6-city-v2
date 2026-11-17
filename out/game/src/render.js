import { COLORS } from './config.js';
import { drawHud } from './hud.js';
import { drawMenu } from './menu.js';
import { drawEffects } from './effects.js';
export function createRenderer(canvas){const ctx=canvas.getContext('2d');function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(canvas.width/1280,0,0,canvas.height/720,0,0)}window.addEventListener('resize',resize);resize();return {draw(s,screen,dt=0){const g=ctx.createLinearGradient(0,0,0,500);g.addColorStop(0,'#55a9be');g.addColorStop(.55,'#f7b879');g.addColorStop(1,'#f7d59a');ctx.fillStyle=g;ctx.fillRect(0,0,1280,720);ctx.fillStyle='#fff1ca';ctx.beginPath();ctx.arc(1030,114,58,0,7);ctx.fill();ctx.globalAlpha=.18;ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(1030,114,90,0,7);ctx.fill();ctx.globalAlpha=1;
ctx.fillStyle=COLORS.ocean;ctx.fillRect(0,400,1280,320);ctx.fillStyle='#e8c38b';ctx.fillRect(0,398,1280,48);
// Boulevard and repeating street blocks
ctx.fillStyle='#41484b';ctx.fillRect(0,476,1280,168);ctx.fillStyle='#ffe4aa';for(let i=0;i<12;i++)ctx.fillRect(i*120+15,555,58,5);
for(let i=0;i<18;i++){let x=(i*93-(s.player.x*.22)%93+1280)%1280;let h=80+(i*47%130);ctx.fillStyle=['#d99470','#e7c291','#bd806b','#8ab0a0'][i%4];ctx.fillRect(x,395-h,60,h);ctx.fillStyle='#f7d99d';for(let k=0;k<3;k++)for(let j=0;j<Math.floor(h/28);j++)ctx.fillRect(x+8+k*17,405-h+j*25,7,9);}
// palms
for(let i=0;i<10;i++){let x=(i*148-(s.player.x*.3)%148+1280)%1280,y=455;ctx.strokeStyle='#725137';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+18,y-54,x+8,y-100);ctx.stroke();ctx.strokeStyle='#28796b';ctx.lineWidth=6;for(let a=-2;a<=2;a++){ctx.beginPath();ctx.moveTo(x+8,y-100);ctx.quadraticCurveTo(x+a*22,y-120,x+a*34,y-103);ctx.stroke();}}
// traffic
for(const car of s.traffic){const x=(640+car.x-s.player.x*.2+1600)%1500-110;drawCar(ctx,x,car.z>0?510:480,car.color,car.z>0?1:.72)}
for(const p of s.pedestrians){let x=(640+p.x-s.player.x*.22+1380)%1380-50;ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(x,467,6,0,7);ctx.fill();ctx.fillRect(x-4,472,8,23)}
for(const c of s.police.cars)drawCar(ctx,640+c.x-s.player.x*.08,493,'#eaf0e6',.95,true);
if(s.player.inCar)drawCar(ctx,620,548,'#f16f59',1.2);else{ctx.fillStyle='#102434';ctx.beginPath();ctx.arc(640,512,12,0,7);ctx.fill();ctx.fillRect(631,522,18,36);}
if(s.player.fire){ctx.fillStyle='#ffd46f';ctx.beginPath();ctx.arc(680,530,12,0,7);ctx.fill();}drawEffects(ctx,s.effects,dt);drawHud(ctx,s);drawMenu(ctx,screen);}}}
function drawCar(ctx,x,y,color,scale=1,police=false){ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ctx.fillStyle='#1b2930';ctx.beginPath();ctx.roundRect(-43,-19,86,35,10);ctx.fill();ctx.fillStyle=color;ctx.beginPath();ctx.roundRect(-40,-22,80,29,8);ctx.fill();ctx.fillStyle='#a8d1d0';ctx.fillRect(-20,-20,35,13);ctx.fillStyle='#192831';ctx.fillRect(-31,4,15,8);ctx.fillRect(18,4,15,8);ctx.fillStyle='#ffe6aa';ctx.fillRect(35,-11,5,7);if(police){ctx.fillStyle='#e94b55';ctx.fillRect(-8,-27,10,5);ctx.fillStyle='#4b9eff';ctx.fillRect(3,-27,10,5)}ctx.restore();}
