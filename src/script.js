import Countdown from "./countdown.js";

const dataReferenciaCoutdown = new Countdown('24 December 2022 23:59:59 GMT-0300');
console.log(dataReferenciaCoutdown.totalTime);

setInterval(() => {
    console.log(dataReferenciaCoutdown.totalTime)
}, 1000)