# Decimal to Binary Converter With Digital Clock #

![Screenshot_57](https://user-images.githubusercontent.com/47697490/108224322-fec62980-7164-11eb-8a25-0f4945b57a1b.png)

### usage ###
- function [binary](https://youtu.be/4Rzm3BE6DL0?t=189) 
- setTimeout
```
setTimeout(function show() {
            var snd = new Audio('..src');
            snd.play()
        }, 500 );
```
- function [digitalClock](https://youtu.be/_2duo1cNTpM?t=590) Conditional (ternary) operator
```
hours = hours < 10 ? '0' + hours : hours;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
```
- or uses if/else statement
```
if(hours<10){ 
    hours="0"+ hours;
    } if(minute<10){ 
        minute="0"+ minute;
    } if(second<10){ 
        second="0"+ second;
    } 
```
- Date Methods [new Date()](https://www.w3schools.com/js/js_date_methods.asp)
call this id `days` `month` `year`
```
function dayMonthYear() {
    let currentDay = new Date();
    document.getElementById("days").innerText = currentDay.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("month").innerHTML = months[currentDay.getMonth()];
    document.getElementById("year").innerHTML = currentDay.getFullYear();
    setInterval(dayMonthYear, );
} dayMonthYear();
```


### Followes design code starter file ###

**Saidur Rahman Setu**


* [github/srsetu](https://github.com/srsetu)

It can be seen at:

https://romanofficial.github.io/Decimal-to-Binary-converter-with-digital-Clock/
