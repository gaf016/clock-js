// Body stili 
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background = "linear-gradient(135deg, #f9d423, #ff4e50)";
document.body.style.fontFamily = "Arial, sans-serif";

// Ota div
let container = document.createElement("div");
container.style.display = "flex";
container.style.gap = "20px";
container.style.padding = "20px 40px";
container.style.background = "#ffb400";
container.style.borderRadius = "12px";
document.body.appendChild(container);

function createTimeBox(hozirgiVaqt) {
  let box = document.createElement("div");
  box.style.background = "#111";
  box.style.color = "#fff";
  box.style.padding = "30px 20px";
  box.style.borderRadius = "10px";
  box.style.width = "100px";
  box.style.textAlign = "center";

  let number = document.createElement("h1");
  number.textContent = "00";
  number.style.margin = "0";
  number.style.fontSize = "48px";

  let text = document.createElement("p");
  text.textContent = hozirgiVaqt;
  text.style.margin = "5px 0 0";
  text.style.fontSize = "16px";
  text.style.opacity = "0.8";

  box.appendChild(number);
  box.appendChild(text);

  container.appendChild(box);
  return number;
}

// div ichidagi p lar
let hours = createTimeBox("Hours");
let minutes = createTimeBox("Minutes");
let seconds = createTimeBox("second");

// yangilanish funskiyasi
function updateClock() {
  let hozir = new Date();
  let h = hozir.getHours();
  let m = hozir.getMinutes();
  let s = hozir.getSeconds();

  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
}

// yangilanib turish
updateClock();
setInterval(updateClock, 1000);
