export function sumOfMultiples(multiple: number, max: number): number {
  if (multiple > max) {
    return 0
  }
  let sum: number = 0
  for (let i = 0; i <= max; i++) {
    if (i % multiple == 0) {
      sum += i
    }
  }
  return sum
}
