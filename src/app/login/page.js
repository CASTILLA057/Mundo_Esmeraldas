import React from "react";
import Link from "next/link";
import "@/app/styles/login.css";

const Login = () => {
    return (
        <div className="body_login">
            {/* Formulario de Login */}
            <div className="container__form" id="Login">
                <div className="form-section_login">
                    <h1>LOGIN</h1>
                    <form method="POST">
                        <div className="form-group">
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Número de teléfono, correo electrónico o nombre de usuario"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                id="contraseña"
                                name="contraseña"
                                placeholder="Contraseña"
                                required
                            />
                        </div>

                        <button type="submit">Iniciar sesión</button>
                    </form>
                    <div className="footer_form">
                        <p>
                            ¿No tienes cuenta?{" "}
                            <Link href="/register">Regístrate</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-login" id="footer">
                <div className="footer-container">
                    <div className="footer-section about">
                        <h3>Sobre Nosotros</h3>
                        <p>
                            Garantía de calidad y autenticidad en cada esmeralda.
                            Compra segura y transparente con nosotros.
                        </p>
                    </div>

                    <div className="footer-section links">
                        <h3>Enlaces Importantes</h3>
                        <ul>
                            <li>
                                <Link href="/">INICIO</Link>
                            </li>
                            <li>
                                <Link href="/compra">COMPRA</Link>
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

export default Login;
