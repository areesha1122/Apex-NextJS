// eslint-disable-next-line import/prefer-default-export
export function delay(time: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
