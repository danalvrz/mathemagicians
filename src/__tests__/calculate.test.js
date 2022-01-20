import calculate from '../logic/calculate';

describe('calcuate testing', () => {
  test('AC testing', () => {
    const obj = {
      total: 10,
      next: 5,
      operation: '+',
    };
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result).toMatchObject({ next: null, operation: null, total: null });
  });
});
