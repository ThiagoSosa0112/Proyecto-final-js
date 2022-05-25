 
let mode = prompt("¿Quieres establecer el modo oscuro? Responda con si o con no.")
let colorModeInicio = document.getElementById("principal");
let colorFooter = document.getElementById("footer");
mode === "si"?  colorModeInicio.className = ("color") : colorModeInicio.className = ("color-white");
mode === "si"?  colorFooter.className = ("color") : colorFooter.className = ("color-white");
mode==="si" && alert("¡Excelente! Modo oscuro activado, recuerda que puede desactivarlo haciendo click sobre el sol!");