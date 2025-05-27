function calculateGCD(a: number, b: number): number {
    if (b === 0) return a;
    else return calculateGCD(b, a % b);
}

console.log(calculateGCD(30, 15));
