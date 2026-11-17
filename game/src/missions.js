import { MISSIONS } from './story.js';
export function createMissions(){return {index:0,progress:0,done:false};}
export function currentObjective(m){return MISSIONS[Math.min(m.index,MISSIONS.length-1)][1];}
export function advanceMission(m){m.index=Math.min(MISSIONS.length-1,m.index+1);m.progress=0;}
