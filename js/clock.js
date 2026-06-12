const clock = document.querySelector("#clock");

function string(form){
    return String(form).padStart(2,"0");
    }

function tiktok() {
    const date = new Date();
    const hours = string(date.getHours());
    const minutes = string(date.getMinutes());
    const seconds = string(date.getSeconds());
    clock.textContent=`${hours}:${minutes}:${seconds}`;
}

tiktok();
setInterval(tiktok,1000);

localStorage.