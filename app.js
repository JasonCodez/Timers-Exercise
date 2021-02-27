function countdown(num) {
   let timer = setInterval(function () {
      num--;
      console.log(num)
      if (num <= 0) {
         clearInterval(timer);
         console.log("Done!");
      }
   }, 1000)
}

function randomGame() {
   let counter = 0;
   let randNum;

   let timer = setInterval(function () {
      randNum = Math.random();
      if (randNum < .75) {
         counter++;
      } else {
         clearInterval(timer);
         console.log(`It took us ${counter} trys`)
      }
   }, 1000)
}