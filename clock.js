/* eslint-disable */
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

document.addEventListener('DOMContentLoaded', () => {
    tickTock();
});

// tickTock :: () -> VOID
function tickTock () {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    setHand(hourHand, hourRotation(hour, minute));
    setHand(minuteHand, minuteRotation(minute, second));
    setHand(secondHand, secondRotation(second));
    const t = setTimeout(tickTock, 1000);
}

//----------------------------------------------------/ 
//---------------- HELPER FUNCTIONS ------------------/
//----------------------------------------------------/ 

// setHand :: ELEM -> INT -> VOID
const setHand = function (hand, degrees) {
    hand.style.transform = "rotate(" + degrees + "deg)";
};

// hourRotation :: INT -> INT -> FLOAT
const hourRotation = function (hour, min) {
    return (hour * 30) + (.5 * min);
}; 

// minuteRotation :: INT -> INT -> FLOAT
const minuteRotation = function (minute, second) {
    return (minute * 6) + (0.1 * second);
}; 

// secondRotation :: INT -> INT
const secondRotation = function (second) {

    return second * 6;
}; 
