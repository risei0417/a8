export const searchAgain = (diff: boolean, milliseconds: number) => {
  return diff && milliseconds + 3.6e6 < Date.now();
};
