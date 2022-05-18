var wakeuptime;
var breakfastTime = 8;
var workTime = 9;
var noon = 12;
var lunchTime = 12;
var offTime = 5;
var dinnerTime = 6;
var bedTime = 10;
var coffeeTime;
var evening = 18;

// To Show the current time 
var showCurrentTime = function() 
{
    //display the string on the webpage 
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    //Set hours 
    if (hours >= noon) 
    {
        meridian = "PM";
    }

    if (hours > noon) 
    {
        hours = hours - 12;
    }

    // Set minutes
    if (minutes < 10) 
    {
        minutes = "0" + minutes;
    }

    // Set Seconds 
    if (seconds < 10) 
    {
        seconds = "0" + seconds;
    }

    // All together. 
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

// Getting the clock to incremnet on its own and change message & pics
var updateClock = function() 
{
    var time = new Date().getHours();
    var messageText;
    var image = "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80";

    var timeEventJS = document.getElementById("timeEvent");
    var onTheMove = document.getElementById("onTheMove");

    // var timeEventJS = document.getElementById("timeEvent");
    // var lolcatImageJS = document.getElementById('lolcatImage');

    if (time == coffeeTime) 
    {
        image = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
        messageText = "COFFEE BREAK!";
    }
    else if (time == wakeuptime) 
    {
        image = "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80";
        messageText = "Wake up!";
    }
    else if (time == breakfastTime) {
        image = "https://images.unsplash.com/photo-1552841872-a0841f72a4ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2004&q=80";
        messageText = "YUM YUMS";
    }
    else if (time == workTime)
    {
        image = "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";
        messageText = "Hi HO off to work I go";
    }
    else if (time < noon) {
        image = "https://images.unsplash.com/photo-1465488867967-ffb57e7f0a89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";
        messageText = "Good Morning";
    }
    else if (time == lunchTime)
    {
        image = "https://images.unsplash.com/photo-1593759608142-e9b18c0dbe86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2462&q=80";
        messageText = "On the GO!";
    }
    else if (time == offTime)
    {
        image = "https://images.unsplash.com/photo-1543994253-fb5633a31812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80";
        messageText = "Headed home";
    }
    else if (time == dinnerTime)
    {
        image = "https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";
        messageText = "Time to EAT!";
    }
    else if (time == bedTime)
    {
        image = "https://images.unsplash.com/photo-1552858725-2758b5fb1286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";
        messageText = "Sleep she comes";
    }

    else if (time >= evening)
    {
        image = "https://images.unsplash.com/photo-1531921765050-176b9ba5f8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80";
        messageText = "Good evening";
    }

    else
    {
      image = "https://images.unsplash.com/photo-1595439291859-89777a22e3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
      messageText = "Good afternoon!";
    }


    console.log(messageText);
    timeEventJS.innerText = messageText;
    onTheMove.src = image;

    showCurrentTime();
};
updateClock();

// Getting the Clock to increment
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Coffee button
var coffeeButton = document.getElementById("coffeeTimeButton");

var coffeeEvent = function () 
{
    if (coffeeTime < 0) 
    {
        coffeeTime = new Date().getHours();
        coffeeTimeButton.innerText = "COFFEE TIME OVER";
        coffeeTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        coffeeTime = -1;
        coffeeTimeButton.innerText = "COFFEE TIME!";
        coffeeTimeButton.style.backgroundColor = "#222";
    }
};

coffeeButton.addEventListener("click", coffeeEvent);
coffeeEvent();

// Activates Wake-up selector 
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function () 
{
    wakeuptime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates breakfast selector 
var breakfastTimeSelector = document.getElementById("breakfastTimeSelector");
var breakfastEvent = function () 
{
    breakfastTime = breakfastTimeSelector.value;
};
breakfastTimeSelector.addEventListener("change", breakfastEvent);

// Activates work selector 
var workTimeSelector = document.getElementById("workTimeSelector");
var workEvent = function () 
{
    workTime = workTimeSelector.value;
};
workTimeSelector.addEventListener("change", workEvent);

// Activates lunch selector 
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function () 
{
    lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates off selector 
var offTimeSelector = document.getElementById("offTimeSelector");
var offEvent = function () 
{
    offTime = offTimeSelector.value;
};
offTimeSelector.addEventListener("change", offEvent);

// Activates dinner selector 
var dinnerTimeSelector = document.getElementById("dinnerTimeSelector");
var dinnerEvent = function () 
{
    dinnerTime = dinnerTimeSelector.value;
};
dinnerTimeSelector.addEventListener("change", dinnerEvent);

// Activates lunch selector 
var bedTimeSelector = document.getElementById("bedTimeSelector");
var bedEvent = function () 
{
    bedTime = bedTimeSelector.value;
};
bedTimeSelector.addEventListener("change", bedEvent);

