function sum(a, b = 0) {
  return parseInt(a, 10) + parseInt(b, 10);
}

describe('sum', () => {
  it('3+5 = 8', () => {
    expect(sum(3, 5)).toEqual(8);
  });
<<<<<<< HEAD
  it( '1+2 = 3', () => {
    expect(sum(1,2)).toEqual(3);
=======
  it('1+2 = 3', () => {
    expect(sum(1, 2)).toEqual(3);
>>>>>>> 094d4b9ba780c19190145ed9468d6fe8265cb6a9
  });
  it('3 = 8', () => {
    expect(sum(3)).toEqual(3);
  });
  describe('with strings', () => {
    it('"0"+"0" = 0', () => {
      expect(sum('0', '0')).toEqual(0);
    });
    it('"2"+3 = 5', () => {
      expect(sum('2', 3)).toEqual(5);
    });
  });
});
