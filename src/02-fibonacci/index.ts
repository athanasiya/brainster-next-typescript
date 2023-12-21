export function fibonacci(n: number): number[] {
  if (n == 0) return []
  if (n == 1) return [0]

  const fibonacci: number[] = []
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      fibonacci.push(i)
    } else {
      fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1])
    }
  }
  return fibonacci
}
