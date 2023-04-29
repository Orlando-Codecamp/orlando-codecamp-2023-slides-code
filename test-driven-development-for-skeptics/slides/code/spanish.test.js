const {
    GetClockwork
} = require('./clockwork');

const testClock = GetClockwork('es');

test('noon', () => {
    const time = '12:00';
    const expected = [
        "son", "las", "doce"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('one is prefixed with "la"', () => {
    const time = '1:00';
    const expected = [
        "es", "la", "una"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('1:10 es la una y diez', () => {
    const time = '1:10';
    const expected = [
        "es", "la", "una", "y", "diez"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('12:45 es la una menos quarto', () => {
    const time = '12:45';
    const expected = [
        "es", "la", "una", "menos", "cuarto"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('half past the hour', () => {
    const time = '12:30';
    const expected = [
        "son", "las", "doce", "y", "media"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('twenty-five past the hour', () => {
    const time = '12:25';
    const expected = [
        "son", "las", "doce", "y", "veinticinco"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('ten to 12', () => {
    const time = '11:52';
    const expected = [
        "son", "las", "doce", "menos", "diez"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});
