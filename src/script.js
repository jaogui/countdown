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
 }

 const dataReferenciaCoutdown = new Countdown('24 December 2022 23:59:59 GMT-0300');

 console.log(dataReferenciaCoutdown._futureDate.getDay());