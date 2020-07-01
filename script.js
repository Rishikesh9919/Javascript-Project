function myFunction() {

const months = ["January","February","March", "April", "May", "June"," July", "August", "September", "October", "November", "December"];

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
    
var dateEntered = new Date(document.getElementById("myDate").value);


//console.log(items)

let futuredate = new Date(dateEntered);
//console.log(futuredate);

const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const minutes = futuredate.getMinutes();
let month = futuredate.getMonth();
//console.log(month);
month = months[month];
//console.log(month);
const date = futuredate.getDate();
let weekday = futuredate.getDay();
weekday = weekdays[weekday];  //weekday = weekdays[futuredate.getDay()];

giveaway.textContent = `Ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// Future time in ms
const futuretime = futuredate.getTime();
//console.log(futuretime);

    function getRemainingTime(){

        const today = new Date().getTime();
        //console.log(today);
        const t = futuretime - today;
        // 1s = 1000ms
        // 1m = 60s
        // 1h = 60m
        // 1d = 24hr
        const oneDay = 24*60*60*1000;// miliseconds in oneday
        const oneHour = 60*60*1000;// miliseconds in oneHour
        const oneMin = 60*1000;// miliseconds in oneMinutes

        // Calculate
        let days = Math.floor(t/oneDay);
        let hours = Math.floor((t % oneDay) / oneHour);
        let mintues = Math.floor((t % oneHour) / oneMin);
        let seconds = Math.floor((t % oneMin) / 1000);
        // set values Array
        const values = [days,hours,mintues,seconds];

        function format(item){
            if(item < 10){
                return item = `0${item}`;
            }
            return item;
        }
        items.forEach(function(items,index){
          items.innerHTML = format(values[index]);  
        })
        
        if(t < 0){
            clearInterval(countdown);
            deadline.innerHTML = `<h4>Time Out</h4>`;
        }
    }
    //countDown
    let countdown = setInterval(getRemainingTime,1000);
    getRemainingTime();
}
function reset(){
  location.reload();
}
