//Time elements
const daysLeftEl = document.querySelector("div.days");
const hoursLeftEl = document.querySelector("div.hours");
const minutesLeftEl = document.querySelector("div.minutes");
const secondsLeftEl = document.querySelector("div.seconds");
const countdownWrapperEl = document.querySelector("div.countdown-wrapper");

/**
 * 
 * @returns number of ms to setted date (01/01/24)
 */
function msTill() {
    const end = new Date('01/01/2024 00:00 AM');
    const now = new Date();
    const distance = end - now;
    return distance;
}

/**
 * Generate a countdown to 01/01/24
 */
function countdown() {
    //Il tempo rimanente in ms è:
    const timeLeft = msTill();
    
    //calcolo quanti millisecondi in 1 secondo, quandi secondi in minuto, ...
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    if (timeLeft < 0) { 
        countdownWrapperEl.innerHTML = `Happy new Year!`
    } else {
        const daysLeft = Math.floor(timeLeft / day);    
        const hoursLeft = Math.floor((timeLeft % day) / hour);    
        const minutesLeft = Math.floor((timeLeft % hour) / minute);    
        const secondsLeft = Math.floor((timeLeft % minute) / second);
        
        daysLeftEl.innerHTML = `${daysLeft} days left`;
        hoursLeftEl.innerHTML = `${hoursLeft} hours left`;
        minutesLeftEl.innerHTML = `${minutesLeft} minutes left`;
        secondsLeftEl.innerHTML = `${secondsLeft} seconds left`;    
    }
}
            
// setInterval(nomeFunzione, tempoPerOgniRipetizione);
updateCountdown = setInterval(countdown, 1000);