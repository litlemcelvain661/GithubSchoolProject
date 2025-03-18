const getRandomTsCode = () => {
  const code = `// Random Ts Code

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let randomNumber = getRandomInt(10);
console.log("Random number: " + randomNumber);`;

return code;