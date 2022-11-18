 class Countdown {
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
         return this._diffOfTimes / 1000
     }


     get minutes() {
         return this._diffOfTimes / (60 * 1000)
     }

     get hours() {
         return this._diffOfTimes / (60 * 60 * 1000)
     }

     get days() {
         return this._diffOfTimes / (24 * 60 * 60 * 1000)
     }



 }

 const dataReferenciaCoutdown = new Countdown('24 December 2022 23:59:59 GMT-0300');

 console.log(dataReferenciaCoutdown._diffOfTimes);