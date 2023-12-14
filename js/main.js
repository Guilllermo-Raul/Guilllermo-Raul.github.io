window.addEventListener('scroll',function() { 
    let animacion= this.document.getElementById('outdoors');
    let posicionObj1= animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla= this.window.innerHeight/2;//window.innerHeight es todo el tam de la pantalla
    if (posicionObj1< tamañoDePantalla){
        animacion.style.animation= 'mover 1s ease-out';
    }

})

window.addEventListener('scroll',function() { 
    let animacion= this.document.getElementById('naturaleza1');
    let posicionObj1= animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoDePantalla= this.window.innerHeight/3.5;//window.innerHeight es todo el tam de la pantalla
    if (posicionObj1< tamañoDePantalla){
        animacion.style.animation= 'mover 1s ease-out';
    }

})

//lista semana
function mostrarTexto() {
    var textoOculto = document.getElementById("textoOculto");

    // Mostrar el texto al presionar el botón
    textoOculto.style.display = "block";
}

//funcion de preloader
document.addEventListener("DOMContentLoaded", function() {
    // Simula un tiempo de carga (puedes ajustar esto según tus necesidades)
    setTimeout(function() {
      document.querySelector('.preloader-container').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 2000); // 3000 milisegundos = 3 segundos (ajusta según sea necesario)
  });


//funcion de  transicion de texto
document.addEventListener("scroll", function() {
    const contenedorScroll = document.querySelector(".contenedorscroll");
    const scrollPosition = window.scrollY;
    const scrollThreshold = 300;
  
    if (scrollPosition > scrollThreshold) {
      contenedorScroll.classList.add("apareciendo");
    } else {
      contenedorScroll.classList.remove("apareciendo");
    }
  });
  
  