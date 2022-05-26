 
let mode = prompt("¿Quieres establecer el modo oscuro? Responda con si o con no.")
let colorModeInicio = document.getElementById("principal");
let colorFooter = document.getElementById("footer");
mode === "si"?  colorModeInicio.className = ("color") : colorModeInicio.className = ("color-white");
mode === "si"?  colorFooter.className = ("color") : colorFooter.className = ("color-white");
if (mode === "si") {
  Swal.fire({
    position: 'center',
    imageUrl: 'https://imagenes.elpais.com/resizer/zQBfJuHz9OKR_fVQbafxOqJ6Bqc=/414x0/filters:focal(272x248:282x258)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/4RFBIE632CW4U6IG4V44UFHXYU.jpg',
    ImageWidth: '250px',
    ImageHeigth: '250px',
    title: 'Modo noche activado',
    showConfirmButton: false,
    timer: 1500
})
}
else{
  Swal.fire({
    position: 'center',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/596/183/large_2x/blue-sky-and-clouds-wallpaper-background-and-sunny-day-free-photo.jpg',
    ImageWidth: '250px',
    ImageHeigth: '250px',
    title: 'Modo día activado',
    showConfirmButton: false,
    timer: 1500
  })
}