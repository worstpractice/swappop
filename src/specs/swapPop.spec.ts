/* eslint-disable sort-keys */
import { anything, array, assert, integer, property } from 'fast-check';
import { swapPop } from '..';
import { randomIndexOf } from './utils/randomIndex';
import { trinary } from './utils/trinary';

test('swapPop should return undefined when the array is empty', (): void => {
  assert(
    property(array(anything(), { maxLength: 0 }), (items: unknown[]): void => {
      const poppedItem = swapPop(items, 0);

      expect(poppedItem).toBe(undefined);
    }),
  );
});

test('swapPop should return the item located at the target index', (): void => {
  assert(
    property(array(anything(), { minLength: 10, maxLength: 20 }), (items: unknown[]): void => {
      const randomIndex = randomIndexOf(items);

      const randomItem = items[randomIndex];

      const poppedItem = swapPop(items, randomIndex);

      expect(poppedItem).toBe(randomItem);
    }),
  );
});

test('swapPop should shorten the array by one', (): void => {
  assert(
    property(array(anything(), { minLength: 1, maxLength: 10 }), (items: unknown[]): void => {
      const originalLength = items.length;

      swapPop(items, 0);

      const newLength = items.length;

      expect(newLength).toEqual(originalLength - 1);
    }),
  );
});

test("swapPop shouldn't affect the length of an empty array", (): void => {
  assert(
    property(array(anything(), { maxLength: 0 }), (items: unknown[]): void => {
      const originalLength = items.length;

      swapPop(items, 0);

      const newLength = items.length;

      expect(newLength).toEqual(originalLength);
    }),
  );
});

describe('when the target index is the last index', () => {
  test("swapPop shouldn't jumble the array", (): void => {
    assert(
      property(array(integer(), { minLength: 10, maxLength: 20 }), (items: number[]): void => {
        const targetIndex = items.length - 1;

        const targetItem = items[targetIndex];

        const poppedItem = swapPop(items, targetIndex);

        expect(poppedItem).toBe(targetItem);
      }),
    );
  });
});

describe("when the target index isn't the last index", () => {
  test('swapPop should jumble the array', (): void => {
    assert(
      property(array(integer(), { minLength: 10, maxLength: 20 }), (items: number[]): void => {
        items.sort(trinary);

        const original = [...items];

        let targetIndex = randomIndexOf(items) - 1;

        const lastIndex = items.length - 1;

        while (targetIndex < 0 || targetIndex > lastIndex) {
          targetIndex = randomIndexOf(items) - 1;
        }

        expect(targetIndex).not.toBe(lastIndex);

        swapPop(items, targetIndex);

        // original.pop(); // equalize length, plus we already know it's not the last element

        const isJumbled = items.some((item, i) => {
          return item !== original[i];
        });

        expect(isJumbled).toBe(true);
      }),
    );
  });
});
