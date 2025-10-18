export const padZero = (num: number) =>
  num >= 10 ? num.toString() : "0" + num.toString();
