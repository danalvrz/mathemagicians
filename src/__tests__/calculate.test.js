import calculate from '../logic/calculate';

describe('calcuate testing', () => {
  test('AC testing', () => {
    const obj = {
      total: 0,
      next: 0,
      operation: 0,
    };
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result).toBeNull({"next": null, "operation": null, "total": null});
  });
});
