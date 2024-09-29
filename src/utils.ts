export const randomElement = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

export const arrayOf = <T>(item: T, length: number = 8): T[] =>
  Array.from({ length }, () => item);
