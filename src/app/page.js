"use client"
import React, { useEffect, useRef, useState } from "react";
import "./styles/estilos.css";
export default function MundoEsmeralda() {
  const carouselInnerRef = useRef(null);
  const slideWidth = 600;
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Clonar slides para efecto carrusel infinito, similar a tu script
  useEffect(() => {
    const carouselInner = carouselInnerRef.current;
    if (!carouselInner) return;
    const slides = Array.from(carouselInner.querySelectorAll(".slide"));
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      carouselInner.appendChild(clone);
    });
  }, []);

  // Manejar el movimiento del slide
  function moveSlide(direction) {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setIndex((prev) => {
      let newIndex = prev + direction;
      const carouselInner = carouselInnerRef.current;
      if (!carouselInner) return prev;

      carouselInner.style.transition = "transform 0.5s ease-in-out";
      carouselInner.style.transform = `translateX(${-newIndex * slideWidth}px)`;

      setTimeout(() => {
        if (newIndex >= carouselInner.querySelectorAll(".slide").length / 2) {
          newIndex = 0;
          carouselInner.style.transition = "none";
          carouselInner.style.transform = `translateX(0px)`;
        }
        if (newIndex < 0) {
          newIndex = carouselInner.querySelectorAll(".slide").length / 2 - 1;
          carouselInner.style.transition = "none";
          carouselInner.style.transform = `translateX(${-newIndex * slideWidth}px)`;
        }
        setIndex(newIndex);
        setIsTransitioning(false);
      }, 500);

      return newIndex;
    });
  }

  // Auto slide con intervalo
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  // Scroll suave para enlaces con href="#formulario"
  useEffect(() => {
    function handleClick(event) {
      event.preventDefault();
      const formulario = document.getElementById("formulario");
      if (formulario) {
        formulario.scrollIntoView({ behavior: "smooth" });
      }
      const checkboxId = event.currentTarget.getAttribute("data-checkbox-id");
      if (checkboxId) {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) checkbox.checked = true;
      }
    }

    const links = document.querySelectorAll('a[href="#formulario"]');
    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <>
      <header>
        <div className="container__header">
          {/* Logo */}
          <div className="logo">
            <a href="#">
              <img src="imagenes/logo/logo.png" alt="No se Encontro imagen" />
            </a>
          </div>
          {/* Fin Logo */}

          {/* Menú de navegación */}
          <div className="menu">
            <nav>
              <ul>
                <li>
                  <a href="#">INICIO</a>
                </li>
                <li>
                  <a href="#ofertas">JOYAS</a>
                </li>
                <li>
                  <a href="#footer">CONTACTO</a>
                </li>
              </ul>
            </nav>
            {/* Fin del menú */}
            <a href="/compra" className="boton">
              Compra
            </a>
            {/* Botón Login */}
            <a href="/login" className="boton">Login</a>
            {/* Fin del botón */}
            {/* Redes sociales */}
      <div className="redes_sociales">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/imagenes/redessociales/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/imagenes/redessociales/twitter.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/imagenes/redessociales/instagram.png" alt="Instagram" />
        </a>
      </div>

          </div>
        </div>
      </header>

      <main>
        {/* inicio del contenedor cover */}
        <div
          className="container_cover"
          style={{ backgroundImage: "url('imagenes/fondo/fondo.jpeg')" }}
        >
          <div className="cover">
            <section className="texto_cover">
              <h1>LA NATURALEZA HECHA JOYAS</h1>
              <p>La Belleza de la Tierra, al Alcance de Tu Mano</p>
              <a href="#proyectos" className="boton_texto_cover">
                Vamos
              </a>
            </section>

            <section className="carousel_cover">
              <div className="carousel">
                <button className="prev" onClick={() => moveSlide(-1)}>
                  &#10094;
                </button>
                <div className="carousel_inner" ref={carouselInnerRef}>
                  <img
                    className="slide"
                    src="imagenes/banner/Esmeralda_1.png"
                    alt="Esmeralda 1"
                  />
                  <img
                    className="slide"
                    src="imagenes/banner/Esmeralda_2.png"
                    alt="Esmeralda 2"
                  />
                  <img
                    className="slide"
                    src="imagenes/banner/Esmeralda_3.png"
                    alt="Esmeralda 3"
                  />
                  <img
                    className="slide"
                    src="imagenes/banner/Esmeralda_4.png"
                    alt="Esmeralda 4"
                  />
                  <img
                    className="slide"
                    src="imagenes/banner/Esmeralda_5.png"
                    alt="Esmeralda 5"
                  />
                  <img
                    className="slide"
                    src="imagenes/banner/Esmeralda_6.png"
                    alt="Esmeralda 6"
                  />
                  <img
                    className="slide"
                    src="imagenes/banner/Esmeralda_7.png"
                    alt="Esmeralda 7"
                  />
                  <img
                    className="slide"
                    src="imagenes/banner/Esmeralda_8.png"
                    alt="Esmeralda 8"
                  />
                </div>
                <button className="next" onClick={() => moveSlide(1)}>
                  &#10095;
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Proyectos */}
        <div className="contenedor_proyectos" id="proyectos">
          <div className="inicio_de_confianza">
            <div className="texto_proyecto">
              <h2>! ECHA UN VISTAZO ¡</h2>
              <h1>Descubre la joya perfecta para ti</h1>
            </div>
            <div className="container_targeta_proyecto ">
              <div
                className="targeta_proyecto"
                style={{ backgroundImage: "url('imagenes/productos/esmeralda_1.webp')" }}
              >
                <a href="#laboratorio" className="proyecto_icons">
                  <h2>De laboratotio</h2>
                </a>
              </div>
              <div
                className="targeta_proyecto"
                style={{ backgroundImage: "url('imagenes/productos/lote_1.jpg')" }}
              >
                <a href="#Lotes" className="proyecto_icons">
                  <h2>Lotes</h2>
                </a>
              </div>
              <div
                className="targeta_proyecto"
                style={{ backgroundImage: "url('imagenes/productos/gema9.jpg')" }}
              >
                <a href="#Talladas" className="proyecto_icons">
                  <h2>Talladas</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Proyectos */}

        {/* Sobre Nosotros - Nuestro Equipo */}
        <div className="container_nosotros" id="ofertas">
          <div className="nosotros">
            <div className="texto_nosotros">
              <h1>La Joya Suprema, Belleza y Exclusividad en Verde</h1>
              <p>Super oferta imperdible de hasta el 50 % de DESCUENTO </p>
              <a href="#laboratorio" className="boton_texto_nosotros">
                Conocer
              </a>
            </div>
            <div className="imagen_nosotros">
              <img src="imagenes/productos/oferta2.jpeg" alt="" />
              <img src="imagenes/productos/oferta1.jpeg" alt="" />
            </div>
          </div>
        </div>
        {/* End Sobre Nosotros - Nuestro Equipo */}

        {/* Servicios */}
        {/* Laboratorio */}
        <div className="container_de_confianza">
          <div className="inicio_de_confianza" id="laboratorio">
            <div className="texto_de_confianza">
              <h1>Conoce Nuestro Amplio Catalogo De !Esmeraldas De Laboratorio¡</h1>
            </div>
            <div className="targetas_confianza">
              <div className="targetas">
                <img src="imagenes/productos/Esmeraldas-Laboratoio_1.webp" alt="No se Encontro imagen" />
                <h2>Sueño Esmeralda</h2>
                <p>$8,800,000 COP por quilate. Sueños hechos</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/Esmeraldas-Laboratoio_2.jpg" alt="No se Encontro imagen" />
                <h2>Corazón Verde</h2>
                <p>$8,400,000 COP por quilate. Amor y pasión en cada</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/Esmeraldas-Laboratoio_3.webp" alt="No se Encontro imagen" />
                <h2>Esmeralda Majestuosa</h2>
                <p>$8,000,000 COP por quilate. Majestuosidad sin igual</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/Esmeraldas-Laboratoio_4.webp" alt="No se Encontro imagen" />
                <h2>Verde Sereno</h2>
                <p>$7,600,000 COP por quilate. Serenidad y paz en cada</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/Esmeraldas-Laboratoio_5.webp" alt="No se Encontro imagen" />
                <h2>Brillo Natural</h2>
                <p>$7,200,000 COP por quilate. Brillo natural único</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Laboratorio */}

        {/* Lotes */}
        <div className="container_de_confianza" id="Lotes">
          <div className="inicio_de_confianza">
            <div className="texto_de_confianza">
              <h1>Lotes De Esmeraldas Talladas A Tu Medida</h1>
            </div>
            <div className="targetas_confianza">
              <div className="targetas">
                <img src="imagenes/productos/lote_1.jpg" alt="No se Encontro imagen" />
                <h2>Lote Esmeralda Real</h2>
                <p>$7,400,000 COP por quilate. La más alta calidad</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/lote_2.jpg" alt="No se Encontro imagen" />
                <h2>Lote Verde Vivo</h2>
                <p>$6,600,000 COP por quilate. Verde intenso y vivo</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/lote_3.webp" alt="No se Encontro imagen" />
                <h2>Lote Esmeralda Brillante</h2>
                <p>$6,000,000 COP por quilate. Brillo excepcional</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/lote_4.webp" alt="No se Encontro imagen" />
                <h2>Lote Verde Cautivador</h2>
                <p>$5,800,000 COP por quilate. Cautivadora belleza</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/lote_5.jpg" alt="No se Encontro imagen" />
                <h2>Lote Esmeralda Elegante</h2>
                <p>$5,400,000 COP por quilate. Elegancia pura</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Lotes */}

        {/* Talladas */}
        <div className="container_de_confianza" id="Talladas">
          <div className="inicio_de_confianza">
            <div className="texto_de_confianza">
              <h1>Esmeraldas Talladas Con Maestría</h1>
            </div>
            <div className="targetas_confianza">
              <div className="targetas">
                <img src="imagenes/productos/gema1.jpg" alt="No se Encontro imagen" />
                <h2>Gema Esmeralda 1</h2>
                <p>$6,400,000 COP por quilate. Corte impecable</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/gema2.jpeg" alt="No se Encontro imagen" />
                <h2>Gema Esmeralda 2</h2>
                <p>$6,200,000 COP por quilate. Brillo sin igual</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/gema3.jpg" alt="No se Encontro imagen" />
                <h2>Gema Esmeralda 3</h2>
                <p>$6,000,000 COP por quilate. Detalles perfectos</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/gema4.png" alt="No se Encontro imagen" />
                <h2>Gema Esmeralda 4</h2>
                <p>$5,800,000 COP por quilate. Resplandor intenso</p>
              </div>
              <div className="targetas">
                <img src="imagenes/productos/gema5.png" alt="No se Encontro imagen" />
                <h2>Gema Esmeralda 5</h2>
                <p>$5,600,000 COP por quilate. Pureza y claridad</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Talladas */}
        {/* Inicio de mapa */}
<div className="mapa" style={{ backgroundColor: "#417350", display: "flex", justifyContent: "center", padding: "2rem 0" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d147021.3648556909!2d-74.16071244953051!3d4.658752247532028!3m2!1i1024!2i768!4f13.1!2m1!1sesmeraldas%20colombia%20ubicacion!5e0!3m2!1ses-419!2sco!4v1740107105711!5m2!1ses-419!2sco"
    width="90%"
    height="400"
    style={{ borderRadius: "30px", border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  ></iframe>
</div>
{/* Fin de mapa */}


  <footer className="footer" id="footer">

          
  <div className="footer-container">
    
    <div className="footer-section" >
      <a href="#footer"></a>
      <h3>Sobre Nosotros</h3>
      <p>
        Somos una organización comprometida con el desarrollo sostenible y la protección del medio ambiente.
      </p>
    </div>

    <div className="footer-section">
      <h3>Enlaces útiles</h3>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contacto</h3>
      <p>Email: contacto@mundoesmeralda.org</p>
      <p>Tel: +57 326 250 5865</p>
    </div>

    <div className="footer-section">
      <h3>Síguenos</h3>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/imagenes/redessociales/facebook.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/imagenes/redessociales/twitter.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/imagenes/redessociales/instagram.png" alt="Instagram" />
        </a>
      </div>
    </div>

  </div>
</footer>
      </main>
    </>
  );
}
