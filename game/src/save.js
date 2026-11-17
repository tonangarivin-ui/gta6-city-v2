const KEY='solara.save.v1';
export function saveGame(state){try{localStorage.setItem(KEY,JSON.stringify({cash:state.player.cash,health:state.player.health,mission:state.missions.index}));return true}catch{return false}}
export function loadGame(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null}}
