export type TimeStamp = {
  _nanoseconds?: number;
  _seconds?: number;
}

export const searchAgain = (milliseconds: number, diff = true) => {
  return diff && milliseconds + 3.6e6 < Date.now();
};

export const toDateStringBySeconds = (seconds?: number) => {
  if (!seconds) {
    return "";
  }

  return new Date(seconds * 1000).toLocaleDateString();
}
