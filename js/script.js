
const botones = document.querySelectorAll(".boton-mas");

botones.forEach(function (boton) { 
  boton.addEventListener("click", function () {
    const extra = boton.parentElement.querySelector(".texto-extra");     
    extra.hidden = !extra.hidden;     
    boton.textContent = extra.hidden ? "Mostrar más" : "Mostrar menos";     
    boton.setAttribute("aria-expanded", String(!extra.hidden));    
  });
});
