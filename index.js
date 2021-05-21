const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');

//* Таймер функция
// const timeCount = () => {
//     let now = new Date();
//     let time = date - now;

//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);

//     daysEl.textContent = days;
//     hoursEl.textContent = hours;
//     minsEl.textContent = mins;
//     secsEl.textContent = secs;
    
// };

// timeCount();

// setInterval(timeCount, 1000)

///////////////////////////////////////////// 
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    };

    start = setInterval(() => {
        let nowDate = Date.now();
        let restTime = this.targetDate - nowDate;
        let time = this.getTimeComponents(restTime);

        this.updateTimerElements(time);
        this.stop(time);
    }, 1000);


    stop(time) {
        if (time <= 0) {
            clearInterval(this.start)
        }
    }

    getTimeComponents(time) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        return { days, hours, mins, secs };
    }

    updateTimerElements({ days, hours, mins, secs }) {
        daysEl.textContent = `${days}`;
        hoursEl.textContent = `${hours}`;
        minsEl.textContent = `${mins}`;
        secsEl.textContent = `${secs}`;
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('June 6 2021'),
});


