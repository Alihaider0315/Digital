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

function startclock(){
    if(startingclock){
        clearInterval(stop);
        document.getElementById('startstop').textContent = "Start";
        button.classList.remove("red-button");
    }
    else {
        stop = setInterval(mainClock , 1000);
        document.getElementById('startstop').textContent = "Stop";
        button.classList.add("red-button");
    }

    startingclock = !startingclock;
}

document.getElementById('startstop').addEventListener('click' , startclock);