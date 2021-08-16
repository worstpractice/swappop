/** Highly performant single-item removal from ANYWHERE (!) in a given `targetArray`. */
export const swapPop = <T>(targetArray: T[], targetIndex: number): T | undefined => {
  const { length } = targetArray;

  if (!length) return; // Exit #1

  const isValidIndex = targetIndex > -1 && targetIndex < length;

  if (!isValidIndex) return; // Exit #2

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // * Index
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const lastIndex = length - 1;

  if (targetIndex === lastIndex) return targetArray.pop(); // Exit #3

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // * Items
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const targetItem = targetArray[targetIndex] as T;
  const lastItem = targetArray[lastIndex] as T;

  if (targetItem === lastItem) return targetArray.pop(); // Exit #4

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // * Swap
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  targetArray[targetIndex] = lastItem;
  targetArray[lastIndex] = targetItem;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // * Pop
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return targetArray.pop(); // Exit #5
};
