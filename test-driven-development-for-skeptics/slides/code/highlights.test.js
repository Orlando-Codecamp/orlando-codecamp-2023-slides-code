const {
    GetClockwork
} = require('./clockwork');

const testClock = GetClockwork('en');

test('highlight noon', () => {
    const timewords = ["it", "is", "twelve", "o'clock"];
    const expected = [
        ["*it", "*is", "half", "ten"],
        ["quarter", "twenty"],
        ["five", "minutes", "to"],
        ["past", "one", "three"],
        ["two", "four", "five"],
        ["six", "seven", "eight"],
        ["nine", "ten", "eleven"],
        ["*twelve", "*o'clock"]
    ];

    expect(testClock.highlights(timewords)).toStrictEqual(expected);
});

test('highlight twenty-five after five', () => {
    const timewords = ["it", "is", "twenty", "five", "minutes", "past", "five"];
    const expected = [
        ["*it", "*is", "half", "ten"],
        ["quarter", "*twenty"],
        ["*five", "*minutes", "to"],
        ["*past", "one", "three"],
        ["two", "four", "*five"],
        ["six", "seven", "eight"],
        ["nine", "ten", "eleven"],
        ["twelve", "o'clock"]
    ];

    expect(testClock.highlights(timewords)).toStrictEqual(expected);
});

test('is highlighted', () => {
    expect(testClock.isHighlighted('*foo')).toBeTruthy();
});

test('is not highlighted', () => {
    expect(testClock.isHighlighted('foo')).toBeFalsy();
});

test('get non-highlighted text', () => {
    expect(testClock.getText('foo')).toEqual('foo');
});

test('get highlighted text', () => {
    expect(testClock.getText('*foo')).toEqual('foo');
});
