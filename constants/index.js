export function generateRandom(min = 20, max = 50) {

    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor( rand * difference);
 
    rand = rand + min;

    return rand;
}
