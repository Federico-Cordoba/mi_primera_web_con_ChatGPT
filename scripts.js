// scripts.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (!nombre || !email || !mensaje) {
      event.preventDefault();
      alert('Por favor completa todos los campos antes de enviar el formulario.');
    } else {
      confirm('¿Estás seguro de enviar el formulario?');
    }
  });

document.addEventListener("DOMContentLoaded", function() {
    const verGaleriaButton = document.getElementById("verGaleriaButton");
    const galeria = document.getElementById("galeria");
    const galeriaTitulo = document.querySelector(".galeria-titulo");
    const carousel = document.querySelector(".carousel");
    const carouselControls = document.querySelector(".carousel-controls");
  
    verGaleriaButton.addEventListener("click", function(event) {
      event.preventDefault();
      galeria.classList.add("show");
      galeriaTitulo.style.display = "block";
      carouselControls.classList.add("fullscreen");
    });
  
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", function() {
      galeria.classList.remove("show");
      galeriaTitulo.style.display = "none";
      carouselControls.classList.remove("fullscreen");
    });
  
    const imagenes = carousel.querySelectorAll("img");
    let currentIndex = 0;
  
    function showImage(index) {
      for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = "none";
      }
      imagenes[index].style.display = "block";
    }
  
    function nextImage() {
      currentIndex++;
      if (currentIndex >= imagenes.length) {
        currentIndex = 0;
      }
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = imagenes.length - 1;
      }
      showImage(currentIndex);
    }
  
    const prevButton = document.querySelector(".prev-button");
    prevButton.addEventListener("click", prevImage);
  
    const nextButton = document.querySelector(".next-button");
    nextButton.addEventListener("click", nextImage);
  
    const fullscreenButton = document.querySelector(".fullscreen-button");
    fullscreenButton.addEventListener("click", function() {
      if (carousel.requestFullscreen) {
        carousel.requestFullscreen();
      } else if (carousel.mozRequestFullScreen) {
        carousel.mozRequestFullScreen();
      } else if (carousel.webkitRequestFullscreen) {
        carousel.webkitRequestFullscreen();
      } else if (carousel.msRequestFullscreen) {
        carousel.msRequestFullscreen();
      }
    });
  
    document.addEventListener("fullscreenchange", function() {
      if (!document.fullscreenElement) {
        carouselControls.style.display = "flex";
      } else {
        carouselControls.style.display = "none";
      }
    });
  
    showImage(currentIndex);

    // Event listeners for arrow keys in fullscreen mode
    document.addEventListener("keydown", function(event) {
      if (document.fullscreenElement) {
        if (event.key === "ArrowLeft") {
          prevImage();
        } else if (event.key === "ArrowRight") {
          nextImage();
        }
      }
    });
  });