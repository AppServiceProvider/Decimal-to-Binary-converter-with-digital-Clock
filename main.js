const result = document.getElementById('result');
const submit = document.getElementById('submit');


function binary(e) {
    e.preventDefault()

    const num = document.getElementById('number').value;

    if (num === "") {
        setTimeout(function show() {
            var snd = new Audio('play/button-28.mp3');
            snd.play()
        }, )
        alert('please enter a number')
    } else if (num < 0) {
        alert("please enter positive number")
    } else {
        result.style.visibility = "visible"
    }

    //    value convert
    binaryNum = Number(num).toString(2)
    result.innerText = binaryNum
    //    console.log(num)

}

submit.addEventListener('click', binary)

// digital clock START

function digitalClock() {

    let date = new Date();
    let hours = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let timeFormate = "PM";


    // conditionApply 24/hours

    if (hours === 0) {
        hours = 12;
    }
    // if(hours === 12) {
    //     timeFormat = 'PM';
    // }
    if (hours > 12) {
        hours = hours - 12;
        timeFormat = 'AM';
    }

    //condition applay less than 10 added zero 
    // if(hours<10){ //less than means 10 Ar Caya Sotto

    // hours="0"+ hours;

    // } if(minute<10){ 

    //     minute="0"+ minute;
    // } if(second<10){ 

    //     second="0"+ second;
    // } 


    hours = hours < 10 ? '0' + hours : hours;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    // You can use ternary operator 



    let finalTime = `${hours}:${minute}:${second}`

    document.getElementById("time").innerText = finalTime;
    document.querySelector('small').innerText = timeFormate;









    //     progress.style.width = (sec / 60) * 100 + '%'

    setInterval(digitalClock, 1000)

}

digitalClock();

// digital clock END




//button Beep


var bleep = new Audio();
bleep.src = 'play/button-20.mp3';


function dayMonthYear() {
    let currentDay = new Date()
    document.getElementById("days").innerText = currentDay.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById("month").innerHTML = months[currentDay.getMonth()]
    document.getElementById("year").innerHTML = currentDay.getFullYear();
    setInterval(dayMonthYear, )

}
dayMonthYear()
