export function rnd(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start + 1)) + end;
}
