// countdown
function countdown(time) { 
    let timer = setInterval(function() { 
        if (time <= 0) {
            clearInterval(timer);
            console.log("DONE!!!");
        }
        else {
        console.log(time);
        }
        time--; // Decease 1 counter to time until time at 0 will stop calling function.
    }
    , 1000)
}

// randomGame
function randomGame() {
    let times = 0;

    let timer = setInterval(function() {
        let num = Math.random(); // declare random number
        times++ // add one to counter
        if (num > .75) { // If random number is greater than .75, function will stop then tell you how many tries.
            clearInterval(timer);
            console.log("It took " + times + " tries");
        }
    }, 1000)
}