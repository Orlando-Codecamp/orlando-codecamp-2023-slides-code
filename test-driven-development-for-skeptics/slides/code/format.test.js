const {
    GetClockwork
} = require('./clockwork');

const testClock = GetClockwork('en');

test('format noon', () => {
    const noon = new Date();

    noon.setHours(12);
    noon.setMinutes(0);

    expect(testClock.formatTime(noon)).toEqual('12:00');
});
