import operate from '../logic/operate';

describe('calcuate testing', () => {
  test('sum testing', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('minus testing', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });

  test('times testing', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });

  test('division testing', () => {
    expect(operate(2, 1, '÷')).toBe('2');
  });
});
