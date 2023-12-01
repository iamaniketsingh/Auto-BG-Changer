const body = document.querySelector("body");

const start = document.getElementById("start");
const end = document.getElementById("end");

const randomColor = () => {
  let color = "#";
  let hex = "0123456789ABCDEF";
  for (let index = 0; index < 6; index++) {
    let num = Math.floor(Math.random() * 16);
    color += hex[num];
  }
  return color;
};
let stopTimeOut;
const startbgChanger = () => {
  start.textContent = "STARTED!!";
  end.textContent = "STOP";
  function bg() {
    document.body.style.backgroundColor = randomColor();
  }
  stopTimeOut = setInterval(bg, 1000);
};

function stopbgChanger() {
  clearInterval(stopTimeOut);
  end.textContent = "STOPPED!!";
  start.textContent = "START";
}

start.addEventListener("click", startbgChanger);
end.addEventListener("click", stopbgChanger);
