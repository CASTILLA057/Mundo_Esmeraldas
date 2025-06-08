import React from "react";
import Link from "next/link";
import "@/app/styles/compra_hecha.css";

const CompraRealizada = () => {
    return (
        <div className="compra-realizada">
            {/* Imagen de fondo */}
            <div
                className="background"
                style={{ backgroundImage: "url('/imagenes/fondo/fondo.jpeg')" }}
            ></div>

            {/* Contenedor del mensaje */}
            <div className="message-container">
                <p>¡Su compra ha sido realizada!</p>
                <img
                    src="/imagenes/fondo/carrito" // Cambia por la extensión correcta
                    alt="Carrito de compra completada"
                />
                <Link href="/">
                    <a className="volver-link">Volver al inicio</a>
                </Link>
            </div>
        </div>
    );
};

export default CompraRealizada;
