function fibonacci(n: number): number[] {
  if (n <= 1) return [0];

  let sequence = [0, 1];
  while (sequence[sequence.length - 1] + sequence[sequence.length - 2] < n) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  if (sequence[sequence.length - 1] > n) sequence.pop();

  return sequence;
}
