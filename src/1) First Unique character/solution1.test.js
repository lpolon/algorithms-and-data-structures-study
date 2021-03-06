import { aaronsSolution1 } from './solutions';

describe('the findFirstUniqueChar function', () => {
  it('test 1: "aaron" returns 2', () => {
    const string = 'aaron';
    const result = aaronsSolution1(string);

    expect(result).toStrictEqual(2);
  });
  it('test2: "leonardo" returns 0', () => {
    const string = 'leonardo';
    const result = aaronsSolution1(string);
    expect(result).toStrictEqual(0);
  });
  it('test3: "aabbcc" returns -1', () => {
    const string = 'aabbcc';
    const result = aaronsSolution1(string);

    expect(result).toStrictEqual(-1);
  });
});
