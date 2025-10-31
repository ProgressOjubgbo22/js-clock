let currentTime = "";
let currentDate = "";

const timeDisplay = document.getElementById("time");
const dateDisplay = document.getElementById("date");

function updateDisplay () {
    timeDisplay.textContent = currentTime || "12:00 AM";
    dateDisplay.textContent = currentDate || "Mon, Jan 01";
 
}

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    currentTime = `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;

     const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
     const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

      currentDate = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
      updateDisplay();
}

updateClock();

setInterval(() => {
updateClock();
}, 1000);