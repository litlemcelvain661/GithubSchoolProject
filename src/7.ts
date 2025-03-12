function generateRandomTsCode(): number {
  let result = 0;
  for (let i = 0; i < 10; i++) {
    result = result * 10 + Math.floor(Math.random() * 10);
  }
  return result;
}
