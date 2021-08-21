export const randomIndexOf = <T>(array: readonly T[]): number => {
  if (!array.length) throw new RangeError(`Expected array.length > 0, was ${array.length}`);

  if (array.length === 1) return 0;

  const lastIndex = array.length - 1;

  const randomIndex = Math.floor(Math.random() * lastIndex);

  return randomIndex;
};
