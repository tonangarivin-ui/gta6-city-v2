import { FIXED_STEP } from './config.js';
import { createCity } from './city.js';
import { createTraffic } from './vehicles.js';
import { createPedestrians, scatter } from './pedestrians.js';
import { createPlayer, movePlayer } from './player.js';
import { createPolice, raiseWanted } from './police.js';
import { createMissions, currentObjective, advanceMission } from './missions.js';
import { createEffects, burst } from './effects.js';
import { createRenderer } from './render.js';
import { stageShot } from './shots.js';
import { fire } from './combat.js';
import { saveGame, loadGame } from './save.js';
import { createAudio } from './audio.js';
import { reward } from './economy.js';
import { MISSIONS } from './story.js';
const canvas=document.getElementById('game'),status=document.getElementById('status'),renderer=createRenderer(canvas),audio=createAudio();
const query=new URLSearchParams(location.search),seed=Number(query.get('seed'))||1;
const state={city:createCity(seed),traffic:createTraffic(),pedestrians:createPedestrians(),player:createPlayer(),police:createPolice(),missions:createMissions(),effects:createEffects(),objective:'',missionName:'Salt on the Wind'};
let screen='title',keys=new Set(),last=performance.now(),acc=0,shot=query.get('shot');state.objective=currentObjective(state.missions);
function resetShot(){if(shot){screen=stageShot(shot,state);if(shot==='chase')scatter(state.pedestrians);}}
function step(dt){movePlayer(state.player,keys,dt);state.traffic.forEach(c=>c.x+=c.speed*dt*(c.phase%2?1:-1));state.pedestrians.forEach(p=>{p.x+=Math.sin(performance.now()/900+p.phase)*dt*12;p.panic=Math.max(0,p.panic-dt)});state.objective=currentObjective(state.missions);}
function frame(now){requestAnimationFrame(frame);if(shot){renderer.draw(state,screen,0);window.__shotReady=true;return}acc+=Math.min(.1,(now-last)/1000);last=now;while(acc>=FIXED_STEP){if(screen==='play')step(FIXED_STEP);acc-=FIXED_STEP}renderer.draw(state,screen,FIXED_STEP)}
window.addEventListener('keydown',e=>{keys.add(e.key.toLowerCase());if(screen==='title'){screen='play';status.textContent='Mara Venn enters Solara Bay.'}else if(e.key==='Tab'||e.key.toLowerCase()==='p'){e.preventDefault();screen=screen==='play'?'paused':'play'}else if(e.key.toLowerCase()==='e'&&screen==='play'){state.player.inCar=!state.player.inCar;if(state.player.inCar){raiseWanted(state.police);state.missionName='Borrowed Sun';state.missions.index=Math.max(1,state.missions.index)}else state.player.speed=0}else if(e.key.toLowerCase()==='m')document.body.classList.toggle('map-open');else if(e.key.toLowerCase()==='k'){advanceMission(state.missions);reward(state.player,350);saveGame(state)}});
window.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));window.addEventListener('blur',()=>keys.clear());canvas.addEventListener('pointerdown',()=>{if(screen==='title')screen='play';else if(screen==='play'){fire(state.player);raiseWanted(state.police);scatter(state.pedestrians);burst(state.effects,680,530);audio.play('shot')}});
const saved=loadGame();if(saved&&!shot){state.player.cash=saved.cash||state.player.cash;state.player.health=saved.health||state.player.health;state.missions.index=saved.mission||0;}resetShot();requestAnimationFrame(frame);
