export function project(x,z,y=0,camera={x:0,z:0}){const depth=Math.max(0.15,1+(z-camera.z)/700); return {x:640+(x-camera.x)/depth,y:395+(z-camera.z)*0.28-y/depth,scale:1/depth,depth};}
export function depthSort(items){return items.sort((a,b)=>b.z-a.z);}
export function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
