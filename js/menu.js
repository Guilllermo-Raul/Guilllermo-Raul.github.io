
//acciones para deslizar el dedo en carrucel new


$(document).ready(function () {
  $("#draggable-container").sortable({
    axis: "x", // Permite el arrastre solo en la dirección horizontal
    cursor: "grabbing", // Cambia el cursor al estilo de agarre durante el arrastre
    tolerance: "pointer" // Mejora la precisión del arrastre
  });

  $(".card-container").on("mousedown", function () {
    $(this).addClass("grabbing");
  });

  $(document).on("mouseup", function () {
    $(".card-container").removeClass("grabbing");
  });
});

//carrucel fin-->

/*menu  Script para manejar el modo responsivo*/

        const menuIcon = document.querySelector('.menu-icon');
          const navList = document.querySelector('.navbar ul');
    
          menuIcon.addEventListener('click', () => {
              navList.classList.toggle('show');
         

      // Oculta los elementos de la lista cuando se muestra el menú responsivo
    const menuItems = document.querySelectorAll('.navbar li');
    menuItems.forEach(item => {
        item.style.display = navList.classList.contains('show') ? 'block' : 'none';
    });
});

    
          window.addEventListener('scroll', () => {
              const navbar = document.querySelector('.navbar');
             
              if (window.scrollY > 50) {
                  navbar.style.background = 'transparent';
                  
              } else {
                  navbar.style.background = 'white';
              }
          });
  

          document.addEventListener('DOMContentLoaded', function() {
            // Simula una carga asincrónica de recursos (puedes ajustar según necesites)
            setTimeout(function() {
                const preloader = document.querySelector('.preloader');
                const navbar = document.querySelector('.navbar');
        
                // Oculta el preloader y muestra el contenido después de un tiempo (puedes ajustar según necesites)
                preloader.style.display = 'none';
                navbar.style.visibility = 'visible';
            }, 2000); // Cambia este valor según necesites
        });
        


      
