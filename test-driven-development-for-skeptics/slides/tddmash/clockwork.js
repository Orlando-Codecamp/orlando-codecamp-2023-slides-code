class Clockwork {
    numberWords() {
        return null;
    }

    highlights(theWords) {
        const result = [];
        const remaining = theWords.slice(0);
        let nextWord = remaining.shift();

        this.theBoard.forEach((row) => {
            const newRow = [];

            row.forEach((word) => {
                if (word === nextWord) {
                    newRow.push(`*${word}`);
                    nextWord = remaining.shift();
                }
                else {
                    newRow.push(word);
                }
            });

            result.push(newRow);
        });

        return result;
    }

    isHighlighted(word) {
        return word.slice(0, 1) === '*';
    }

    getText(word) {
        if (this.isHighlighted(word)) {
            return word.slice(1);
        }
        else {
            return word;
        }
    }

    formatTime(dateTime) {
        return `${this.pad(dateTime.getHours())}:${this.pad(dateTime.getMinutes())}`;
    }

    pad(num) {
        return `0${num}`.slice(-2);
    }

    parseTime(timestr) {
        return timestr
            .split(':')
            .map((numstr) => {
                return Number(numstr);
            });
    }

    roundMinutes(minutes) {
        return minutes - (minutes % 5);
    }
}

class EnglishClockwork extends Clockwork {
    constructor() {
        super();
        this.theBoard = [
            ["it", "is", "half", "ten"],
            ["quarter", "twenty"],
            ["five", "minutes", "to"],
            ["past", "one", "three"],
            ["two", "four", "five"],
            ["six", "seven", "eight"],
            ["nine", "ten", "eleven"],
            ["twelve", "o'clock"]
        ];

        this.numberText = [
            "twelve",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven"
        ];

        this.prefixes = [
            ["it", "is"]
        ];
        this.suffix = ["o'clock"];
    }

    numberWords(num) {
        if (num === 20) {
            return "twenty";
        }
        else if (num === 15) {
            return "quarter";
        }

        return this.numberText[num];
    }

    minuteWords(minutes) {
        if (minutes === "20") {
            return ["twenty", "minutes"];
        }
        else if (minutes === 15) {
            return ["quarter"];
        }
        else if (minutes === 25) {
            return ["twenty", "five", "minutes"];
        }
        else if (minutes === 30) {
            return ["half"];
        }
        else {
            return [this.numberWords(minutes, this.numberText), "minutes"];
        }
    }

    timeWords(timestring) {
        const parts = this.parseTime(timestring);
        let hour = parts[0] % 12;
        let minute = this.roundMinutes(parts[1]);

        const prefix = this.prefixes[0];

        if (minute === 0) {
            const results = prefix
                .concat(this.numberWords(hour, this.numberText));

            return results.concat(this.suffix);
        }
        else {
            let direction = "past";

            if (minute > 30) {
                direction = "to";
                hour = (hour + 1) % 12;
                minute = 60 - minute;
            }

            return prefix
                .concat(this.minuteWords(minute))
                .concat([direction, this.numberWords(hour)]);
        }
    }
}

class SpanishClockwork extends Clockwork {
    constructor() {
        super();

        this.numberText = [
            "doce",
            "una",
            "dos",
            "tres",
            "cuatro",
            "cinco",
            "seis",
            "siete",
            "ocho",
            "nueve",
            "diez",
            "once"
        ];

        this.theBoard = [
            ["es", "son", "la", "las", "uno"],
            ["dos", "tres", "cuatro"],
            ["cinco", "seis", "siete"],
            ["ocho", "nueve", "diez"],
            ["once", "doce", "y", "menos"],
            ["cuarto", "media"],
            ["cinco", "diez", "veinte"],
            ["veinticinco"]
        ];

        this.prefixes = [
            ["es", "la"],
            ["son", "las"]
        ];
        this.suffix = null;
    }

    numberWords(num) {
        if (num === 20) {
            return "veinte";
        }
        else if (num === 15) {
            return "cuarto";
        }
        else if (num === 25) {
            return "veinticinco";
        }
        else if (num === 30) {
            return "media";
        }

        return this.numberText[num];
    }

    minuteWords(minutes) {
        return [this.numberWords(minutes)];
    }

    timeWords(timestring) {
        const parts = this.parseTime(timestring);
        let hour = parts[0] % 12;
        let minute = this.roundMinutes(parts[1]);
        const singular = 0;
        const plural = this.prefixes.length === 1 ? 0 : 1;
        let direction = "y";

        if (minute > 30) {
            direction = "menos";
            hour = (hour + 1) % 12;
            minute = 60 - minute;
        }

        const usedPrefix = hour === 1 ? singular : plural;

        if (minute === 0) {
            const results = this.prefixes[usedPrefix]
                .concat(this.numberWords(hour));

            return results;
        }
        else {
            return this.prefixes[usedPrefix]
                .concat([this.numberWords(hour), direction])
                .concat(this.minuteWords(minute));
        }
    }
}

function GetClockwork(language) {
    if (language === "en") {
        return new EnglishClockwork();
    }
    else if (language === "es") {
        return new SpanishClockwork();
    }
    else {
        return null;
    }
}

if (typeof exports === 'object') {
    module.exports = {
        GetClockwork
    };
}
