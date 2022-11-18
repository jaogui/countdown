export default class Countdown {
    constructor(dataFutura) {
        this.dataFutura = dataFutura;
    }

    get _actualDate() {
        return new Date();
    }

    get _futureDate() {
        return new Date(this.dataFutura);
    }

    get _diffOfTimes() {
        return this._futureDate.getTime() - this._actualDate.getTime();
    }


    get seconds() {
        return Math.floor(this._diffOfTimes / 1000)
    }


    get minutes() {
        return Math.floor(this._diffOfTimes / (60 * 1000))
    }

    get hours() {
        return Math.floor(this._diffOfTimes / (60 * 60 * 1000))
    }

    get days() {
        return Math.floor(this._diffOfTimes / (24 * 60 * 60 * 1000))
    }

    get totalTime() {
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return {
            days,
            hours,
            minutes,
            seconds,
        }
    }

}