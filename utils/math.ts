export const random = (max: number, minus: number) => {
  return Math.floor(Math.random() * max + 1 - minus);
};
