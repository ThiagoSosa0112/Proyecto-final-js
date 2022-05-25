const dark = "click";
let botonDark = document.getElementById("moon");
botonDark.addEventListener ('click', () => {
        let colorMode1 = document.getElementById("principal");
        colorMode1.className = ("color");
        let footer1 = document.getElementById("footer");
        footer1.className = ("color");
})
let botonLight = document.getElementById("sun");
botonLight.addEventListener ('click', () => {
        let colorMode2 = document.getElementById("principal");
        colorMode2.className = ("color2");
        let footer2 = document.getElementById("footer");
        footer2.className = ("color2");
})