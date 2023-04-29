const {
    GetClockwork
} = require('./clockwork');

const testClock = GetClockwork('en');

test('five past the hour', () => {
    const time = '12:05';
    const expected = [
        "it", "is", "five", "minutes", "past", "twelve"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('twenty past the hour', () => {
    const time = '12:20';
    const expected = [
        "it", "is", "twenty", "minutes", "past", "twelve"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('round minutes down', () => {
    const time = '12:06';
    const expected = [
        "it", "is", "five", "minutes", "past", "twelve"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('quarter past the hour', () => {
    const time = '12:15';
    const expected = [
        "it", "is", "quarter", "past", "twelve"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('half past the hour', () => {
    const time = '12:30';
    const expected = [
        "it", "is", "half", "past", "twelve"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('twenty-five past the hour', () => {
    const time = '12:25';
    const expected = [
        "it", "is", "twenty", "five", "minutes", "past", "twelve"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('five to one', () => {
    const time = '12:55';
    const expected = [
        "it", "is", "five", "minutes", "to", "one"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('quarter to one', () => {
    const time = '12:45';
    const expected = [
        "it", "is", "quarter", "to", "one"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});

test('ten to 12', () => {
    const time = '11:52';
    const expected = [
        "it", "is", "ten", "minutes", "to", "twelve"
    ];

    expect(testClock.timeWords(time)).toStrictEqual(expected);
});
