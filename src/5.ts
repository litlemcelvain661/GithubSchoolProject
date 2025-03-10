async function getRandomNumber(maxValue: number): Promise<number> {
  return Math.floor(Math.random() * maxValue);
}

getRandomNumber(10).then((result) => console.log(result));
