var secondsLeft = 60;

function setTime()  {
    var timerInterval = setInterval(function()  {
        secondsLeft--;
        timerInterval.textContent = secondsLeft + "Time remaining.";

        if(secondsLeft ===0)    {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}