export const randomElement = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

export const arrayOf = <T>(item: T, length: number = 8): T[] =>
  Array.from({ length }, () => item);

export const resolveAfter = <T>(
  data: T,
  delay: number = 1_000,
  errorChance: number = 0
): Promise<T> =>
  new Promise((resolve, reject) => {
    const isSuccess = Math.random() > errorChance;

    setTimeout(() => {
      return isSuccess ? resolve(data) : reject("Mocked promise failed.");
    }, delay);
  });

export const useMocks = false;

export const clampText = (str: string, maxLength: number = 50) =>
  str.slice(0, maxLength) + (str.length > 50 ? "..." : "");
