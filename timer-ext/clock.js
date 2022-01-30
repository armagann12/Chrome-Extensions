// Window Prompt for the user input
var input = window.prompt("Set a time for the Timer", 0);

//Alert Prompt if the input is not a number
if(isNaN(input)){
    input = 0   
    window.alert("Type in a Number")
}

//Get the timer element in popup.html
const countdown = document.getElementById("timer")

//Call update every second
interval = setInterval(update, 1000)

const start = input
let time = start * 60 

function update(){
    const minute = Math.floor(time / 60);
    let second = time % 60;

    second = second < 10 ? "0" + second : second

    countdown.innerHTML = `${minute}: ${second}`

    time --

    //Alert and stop when timer hits zer0
    if(time == -1){
        window.alert("Your Time is up")
        clearInterval(interval)
    }
}