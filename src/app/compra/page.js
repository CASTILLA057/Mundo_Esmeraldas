"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/styles/compra.css";

const tiposDeEsmeralda = [
    "Esmeralda Aurora", "Verde Celestial", "Brillo de Jade", "Esmeralda Encantada", "Resplandor Esmeralda",
    "Gema de la Fortuna", "Bosque Esmeralda", "Esplendor Verde", "Esmeralda Imperial", "Gema de la Esperanza",
    "Esmeralda de los Andes", "Verde Puro", "Esmeralda Eterna", "Luz Esmeralda", "Verde Sereno",
    "Esmeralda Majestuosa", "Corazón Verde", "Sueño Esmeralda"
];

const quilatajes = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];

const CompraEsmeraldas = () => {
    const [mostrarProductos, setMostrarProductos] = useState(false);
    const [tiposSeleccionados, setTiposSeleccionados] = useState([]);
    const router = useRouter();

    const toggleProducto = () => {
        setMostrarProductos((prev) => !prev);
    };

    const handleTipoChange = (e) => {
        const { value, checked } = e.target;
        setTiposSeleccionados((prev) =>
            checked ? [...prev, value] : prev.filter((tipo) => tipo !== value)
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (tiposSeleccionados.length === 0) {
            alert("Por favor, selecciona al menos un tipo de esmeralda.");
            return;
        }
        // Aquí podrías guardar los datos si es necesario antes de redirigir
        router.push("/compra_hecha");
    };

    return (
        <div className="compra-container">
            <section className="compra-esmeraldas">
                <h2>COMPRA</h2>
                <form id="formulario-compra" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre Completo</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono de Contacto</label>
                        <div className="telefono-container">
                            <span className="telefono-prefijo">+57</span>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                pattern="\d{10}"
                                required
                                placeholder="3001234567"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="button" className="button" onClick={toggleProducto}>
                            Escoger Producto
                        </button>
                        {mostrarProductos && (
                            <div id="productos">
                                <label>Tipo de Esmeralda</label>
                                <div className="checkbox-group" id="grupo-productos">
                                    {tiposDeEsmeralda.map((tipo, index) => (
                                        <label key={index}>
                                            <input
                                                type="checkbox"
                                                name="tipo-esmeralda"
                                                value={tipo}
                                                onChange={handleTipoChange}
                                            />
                                            {tipo}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="quilataje">Quilataje</label>
                        <select id="quilataje" name="quilataje" required>
                            <option value="">Selecciona el quilataje</option>
                            {quilatajes.map((q, i) => (
                                <option key={i} value={q}>
                                    {q} quilates
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cantidad">Cantidad</label>
                        <input type="number" id="cantidad" name="cantidad" min="1" max="100" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="direccion">Dirección de Entrega</label>
                        <input type="text" id="direccion" name="direccion" required />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="button">Comprar</button>
                    </div>
                </form>
            </section>

            <footer className="footer-login" id="footer">
                <div className="footer-container">
                    <div className="footer-section about">
                        <h3>Sobre Nosotros</h3>
                        <p>Garantía de calidad y autenticidad en cada esmeralda. Compra segura y transparente con nosotros.</p>
                    </div>
                    <div className="footer-section links">
                        <h3>Enlaces Importantes</h3>
                        <ul>
                            <li>
                                <Link href="/">INICIO</Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/CASTILLA057/Pagina_mantenimiento.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    DISEÑADOR DE LA PÁGINA
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section contact">
                        <h3>Contáctanos</h3>
                        <p>Teléfono: +57 326 250 5865</p>
                        <p>Email: mundoesmeraldac@gmail.com</p>
                    </div>
                    <div className="footer-section social">
                        <h3>Síguenos</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/redessociales/facebook.png" alt="Facebook" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/redessociales/youtube.png" alt="YouTube" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="/imagenes/redessociales/instagram.png" alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CompraEsmeraldas;
