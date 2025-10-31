const animatedText = "HALLO SELAMAT DATANG DI APLIKASI KAMII";
const animatedText2 = "MENGHITUNG FISIKA DENGAN MENYENANGKAN";
const colors = ["#FFB6C1","#E6E6FA","#BDFCC9","#B3C3C3","#FFE6"];

function animateText(text, elementId, speed = 70, callback) {
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  let i = 0;

  function nextChar() {
    if (i < text.length) {
      const span = document.createElement("span");
      span.classList.add("color-text");
      span.style.color = colors[i % colors.length];
      span.textContent = text[i];
      el.appendChild(span);
      i++;
      setTimeout(nextChar, speed);
    } else if (callback) callback();
  }
  nextChar();
}

animateText(animatedText, "animatedText", 70, () => {
  animateText(animatedText2, "animatedText", 70);
});

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  if(username === "sasya" && password === "007008"){
    document.getElementById("loginDiv").classList.add("hidden");
    document.getElementById("menuDiv").classList.remove("hidden");
  } else {
    msg.textContent = "Username atau password salah!";
  }
}

function showForm() {
  const menu = document.getElementById("menuSelect").value;
  const formFields = document.getElementById("formFields");
  formFields.innerHTML = "";

  if(menu === "glb"){
    formFields.innerHTML = `
      Jarak (m): <input type="number" id="s"><br>
      Waktu (s): <input type="number" id="t"><br>
    `;
  } else if(menu === "glbb"){
    formFields.innerHTML = `
      Kecepatan Awal (m/s): <input type="number" id="V0"><br>
      Percepatan (m/s²): <input type="number" id="a"><br>
      Waktu (s) [opsional]: <input type="number" id="t"><br>
      Jarak (m) [opsional]: <input type="number" id="s"><br>
      Pilih Rumus: 
      <select id="glbbRumus">
        <option value="1">Vt = V0 + a*t</option>
        <option value="2">Vt² = V0² + 2*a*s</option>
        <option value="3">s = V0*t + ½*a*t²</option>
      </select>
    `;
  } else if(menu === "gva" || menu === "gvb"){
    formFields.innerHTML = `
      Kecepatan Awal (m/s): <input type="number" id="V0"><br>
      Waktu (s): <input type="number" id="t"><br>
      Ketinggian (m): <input type="number" id="h"><br>
      Pilih Rumus: 
      <select id="gvRumus">
        <option value="1">Vt = V0 ${menu === "gva"? "+":"-"} 10*t</option>
        <option value="2">Vt² = V0² ${menu === "gva"? "+":"-"} 2*10*h</option>
        <option value="3">h = V0*t ${menu === "gva"? "+":"-"} ½*10*t²</option>
      </select>
    `;
  }

  document.getElementById("menuDiv").classList.add("hidden");
  document.getElementById("formDiv").classList.remove("hidden");
}

function calculate() {
  const menu = document.getElementById("menuSelect").value;
  let output = "";
  const g = 10;

  if(menu === "glb"){
    const s = parseFloat(document.getElementById("s").value);
    const t = parseFloat(document.getElementById("t").value);
    const v = s / t;
    output = `Kecepatan (v) = ${v.toFixed(2)} m/s`;
  } else if(menu === "glbb"){
    const V0 = parseFloat(document.getElementById("V0").value);
    const a = parseFloat(document.getElementById("a").value);
    const t = parseFloat(document.getElementById("t").value);
    const s = parseFloat(document.getElementById("s").value);
    const rumus = document.getElementById("glbbRumus").value;
    if(rumus === "1") output = `Vt = ${(V0 + a*t).toFixed(2)} m/s`;
    else if(rumus === "2") output = `Vt² = ${(V0*V0 + 2*a*s).toFixed(2)}`;
    else if(rumus === "3") output = `s = ${(V0*t + 0.5*a*t*t).toFixed(2)} m`;
  } else if(menu === "gva" || menu === "gvb"){
    const V0 = parseFloat(document.getElementById("V0").value);
    const t = parseFloat(document.getElementById("t").value);
    const h = parseFloat(document.getElementById("h").value);
    const rumus = document.getElementById("gvRumus").value;

    if(menu === "gva"){
      if(rumus==="1") output = `Vt = ${(V0 + g*t).toFixed(2)} m/s`;
      else if(rumus==="2") output = `Vt² = ${(V0*V0 + 2*g*h).toFixed(2)}`;
      else if(rumus==="3") output = `h = ${(V0*t + 0.5*g*t*t).toFixed(2)} m`;
    } else {
      if(rumus==="1") output = `Vt = ${(V0 - g*t).toFixed(2)} m/s`;
      else if(rumus==="2") output = `Vt² = ${(V0*V0 - 2*g*h).toFixed(2)}`;
      else if(rumus==="3") output = `h = ${(V0*t - 0.5*g*t*t).toFixed(2)} m`;
    }
  }

  document.getElementById("output").innerText = output;
}

function backToMenu() {
  document.getElementById("formDiv").classList.add("hidden");
  document.getElementById("menuDiv").classList.remove("hidden");
}
