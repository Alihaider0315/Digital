let stop;
let startingclock = false;

function mainClock(){
    const recent = new Date();
    let watch_hours = recent.getHours();
    let watch_minut = recent.getMinutes();
    let watch_secon = recent.getSeconds();
    let watch_milse = String(recent.getMilliseconds()).padStart(3, '0').substring(0, 2);
    const amPm = watch_hours >= 12 ? "PM" : "AM";
    watch_hours = (watch_hours % 12) || 12 ;
    document.getElementById('hours').textContent = `${watch_hours}:${watch_minut}:${watch_secon}:${String(watch_milse).padStart(2,'0')} ${amPm}`;
    
}


function daytoday(){
    const recent = new Date();
    const dayToday = recent.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[dayToday];
    document.getElementById('today').textContent = `${dayOfWeek}`;
    console.log(dayOfWeek);
}

function startclock(){
    if(startingclock){
        clearInterval(stop);
        document.getElementById('startstop').textContent = "Start";
    }
    else {
        stop = setInterval(mainClock , 1000);
        document.getElementById('startstop').textContent = "Stop";
    }

    startingclock = !startingclock;
}

document.getElementById('startstop').addEventListener('click' , startclock);
document.getElementById('today').textContent = `${dayOfWeek}`;