export const searchAgain = (milliseconds: number, diff: boolean = true) => {
  return diff && milliseconds + 3.6e6 < Date.now();
};
