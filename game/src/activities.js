export const ACTIVITIES=[{name:'Sunset Sprint',kind:'race'},{name:'Pier-to-Pier',kind:'delivery'},{name:'Heatwave',kind:'rampage'}];
export function startActivity(name){return {name,clock:45,score:0,active:true};}
