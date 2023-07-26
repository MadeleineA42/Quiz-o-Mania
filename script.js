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

const questions = [
    {
        question: "Commonly used data strings DO NOT include ___.",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]
    },
    
]