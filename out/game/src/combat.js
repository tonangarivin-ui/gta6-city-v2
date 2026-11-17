export function fire(player){player.fire=.16;player.health=Math.max(1,player.health);}
export function updateCombat(player,dt){player.fire=Math.max(0,player.fire-dt);}
