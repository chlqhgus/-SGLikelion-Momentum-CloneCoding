const clock = document.querySelector("h2#clock");
const CK = "clock-font";

function getClock() {
    const date = new Date(); // date 객체를 활용하여 현재 시간 가져오기
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    clock.className = CK;
}

getClock();
setInterval(getClock,1000);