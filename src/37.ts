// example.ts
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

console.log(getRandomInt(1, 100));
