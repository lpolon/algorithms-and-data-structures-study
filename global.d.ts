declare global {
  interface ReadonlyArray<T> {
    reduce<U>(
      callbackfn: (
        previousValue: U,
        currentValue: T,
        currentIndex: number,
        array: readonly T[],
      ) => U,
      initialValue: U,
    ): U;

    includes(searchElement: number | boolean | string, fromIndex?: number): boolean;
  }

  interface Array<T> {
    reduce<U>(
      callbackfn: (
        previousValue: U,
        currentValue: T,
        currentIndex: number,
        array: readonly T[],
      ) => U,
      initialValue: U,
    ): U;

    includes(searchElement: number | boolean | string, fromIndex?: number): boolean;
  }
}

export {};
