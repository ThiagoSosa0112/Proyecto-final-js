
let mode = prompt("¿Quieres establecer el modo oscuro? Responda con si o con no.")
let colorModeInicio = document.getElementById("principal");
let colorModeFooter = document.getElementById("footer");
mode === "si"?  colorModeInicio.className = ("color") : colorModeInicio.className = ("color2");
mode === "si"?  colorModeFooter.className = ("color") : colorModeFooter.className = ("color2");
mode==="si" && alert("¡Excelente! Modo oscuro activado, recuerda que puede desactivarlo haciendo click sobre el sol!");