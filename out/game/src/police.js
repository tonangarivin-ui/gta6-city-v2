export function createPolice(level=0){return {level,cars:[{x:-150,z:-145,phase:0},{x:120,z:-205,phase:2}]};}
export function raiseWanted(police){police.level=Math.min(5,police.level+1);}
