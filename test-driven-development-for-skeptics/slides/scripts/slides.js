const slides = document.getElementsByClassName('slide');
let current = 0;

window.addEventListener('resize', adjustHeight);

setTimeout(function() {
    loadSlide(0)
}, 100);

document.body.addEventListener('keydown', (evt) => {
    if (evt.ctrlKey || evt.metaKey || evt.altKey) {
        return;
    }

    const code = evt.which;

    const forwards = [
        32, // space
        34 // pgdn
    ];
    const backs = [
        8, // backspace
        33 // pgup
    ];

    if (forwards.indexOf(code) >= 0) {
        evt.stopPropagation();
        evt.preventDefault();

        moveNext();
    }
    else if (backs.indexOf(code) >= 0) {
        evt.stopPropagation();
        evt.preventDefault();

        movePrev();
    }
});


function moveNext() {
    const nextSlide = current + 1;
    const isNextSlide = nextSlide < slides.length;

    if (isNextSlide) {
        current = nextSlide;
        loadSlide(current, true);
    }
}

function movePrev() {
    const prevSlide = current - 1;
    const isPrevSlide = prevSlide >= 0;

    if (isPrevSlide) {
        current = prevSlide;
        loadSlide(current);
    }
}

function loadSlide(slideNo) {
    adjustHeight();
    slides[slideNo].scrollIntoView(true);
}

function adjustHeight() {
    const slide = slides[current];
    const winHeight = window.innerHeight;
    slide.style.minHeight = winHeight + 'px';
}
