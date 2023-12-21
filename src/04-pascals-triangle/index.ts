export function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex == 0) return [1]
  if (rowIndex == 1) return [1, 1]
  const pascalTriangleRow: number[] = []
  for (let i = 0; i <= rowIndex; i++) {
    pascalTriangleRow.push(1)
    for (let j = i - 1; j > 0; j--) {
      pascalTriangleRow[j] += pascalTriangleRow[j - 1]
    }
  }
  return pascalTriangleRow
}
