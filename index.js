// const daysEl = document.querySelector('[data-value="days"]');
// const hoursEl = document.querySelector('[data-value="hours"]');
// const minsEl = document.querySelector('[data-value="mins"]');
// const secsEl = document.querySelector('[data-value="secs"]');

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
        this.start();
        this.getRefs();
    };

    start() {
        const dataID = setInterval(() => {
            let nowDate = Date.now();
            let restTime = this.targetDate - nowDate;
            let time = this.getTimeComponents(restTime);

            this.updateTimerElements(time);
            this.stop(time, dataID);
        }, 1000)
    }

    stop({days, hours, mins, secs}, id) {
         if(days === `00` &&
        hours === `00`&&
        mins === `00`&&
        secs === `00`){
            clearInterval(id)
            alert('That`s it!')
        }
    }

    pad(value){
        return String(value).padStart(2,'0');
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }

    getRefs() {
        const elementRef = document.querySelector(this.selector);
        return {
            days:elementRef.querySelector('[data-value="days"]'),
            hours: elementRef.querySelector('[data-value="hours"]'),
            mins: elementRef.querySelector('[data-value="mins"]'),
            secs: elementRef.querySelector('[data-value="secs"]'),
        }
    }

    updateTimerElements({days, hours, mins, secs}){
        this.getRefs().days.textContent = `${days}`;
        this.getRefs().hours.textContent = `${hours}`;
        this.getRefs().mins.textContent = `${mins}`;
        this.getRefs().secs.textContent = `${secs}`;
    }

    
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('June 28 2021 19:13:00'),
});

new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('June 27 2022'),
});


