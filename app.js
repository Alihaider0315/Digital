let stop;
let startingclock = false;

function mainClock(){
    
    const recent = new Date();
    const dayToday = recent.getDay();
    const todaydate = recent.getDate();
    const month = recent.getMonth();
    const month_name = ['Janurary' , 'Feburary' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October','November','December'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[dayToday];
    const calendar = month_name[month];
    const year = recent.getFullYear();
    let watch_hours = recent.getHours();
    let watch_minut = recent.getMinutes();
    let watch_secon = recent.getSeconds();
    // let watch_milse = String(recent.getMilliseconds()).padStart(3, '0').substring(0, 2); // For Seconds
    const amPm = watch_hours >= 12 ? "PM" : "AM";
    watch_hours = (watch_hours % 12) || 12 ;
    document.getElementById('hours').textContent = `${watch_hours}:${watch_minut}:${watch_secon} ${amPm}`;
    document.getElementById('days').textContent = `${dayOfWeek}`;
    document.getElementById('date').textContent = `${todaydate}-${calendar}-${year}`;
    
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