const { add, subtract, multiply, divide } = require('./math');

test('add(2, 3) sollte 5 ergeben', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtract(5, 2) sollte 3 ergeben', () => {
    expect(subtract(5, 2)).toBe(3);
});

test('multiply(3, 4) sollte 12 ergeben', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('divide(6, 3) sollte 2 ergeben', () => {
    expect(divide(6, 3)).toBe(2);
});
