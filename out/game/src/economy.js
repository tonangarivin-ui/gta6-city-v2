export function reward(player,amount){player.cash+=amount;}
export function purchase(player,cost){if(player.cash<cost)return false;player.cash-=cost;return true;}
export const SHOPS=[{name:'Tide Motors',upgrade:'engine',cost:600},{name:'Palm Clinic',upgrade:'health',cost:350}];
