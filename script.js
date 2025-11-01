const text1 = "HALLO SELAMAT DATANG DI APLIKASI KAMI 💫";
let index = 0;

function animateText() {
    if (index < text1.length) {
        document.getElementById("animatedText").innerHTML += text1.charAt(index);
        index++;
        setTimeout(animateText, 80);
    }
}

animateText();

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("loginMsg");

    if (user === "sasya" && pass === "007008") {
        msg.style.color = "#baffc9";
        msg.textContent = "Login berhasil! 🌸";
        showLoading();
    } else {
        msg.style.color = "#ffcccc";
        msg.textContent = "Username atau password salah!";
    }
}

function showLoading() {
    const textElem = document.getElementById("animatedText");
    textElem.innerHTML = "Loading";
    let dots = 0;

    const loading = setInterval(() => {
        textElem.innerHTML = "Loading" + ".".repeat(dots);
        dots = (dots + 1) % 4;
    }, 500);

    setTimeout(() => {
        clearInterval(loading);
        document.getElementById("loginDiv").classList.add("hidden");
        document.getElementById("menuDiv").classList.remove("hidden");

        // Munculin foto dengan animasi fade-in
        const fotoContainer = document.getElementById("fotoContainer");
        fotoContainer.classList.remove("hidden");
        setTimeout(() => fotoContainer.classList.add("show"), 100);

        textElem.innerHTML = "Selamat Datang di Dunia Fisika Menyenangkan! ⚡";
    }, 3500);
}
