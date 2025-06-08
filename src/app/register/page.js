import React from "react";
import "@/app/styles/Register.css";

const Register = () => {
  return (
    <div className="body_register">
      {/* Formulario de Registro */}
      <div className="container__form" id="Register">
        <div className="form-section_register">
          <h1>REGISTER</h1>
          <form method="POST">
            <div className="form-group">
              <select name="type_document" required defaultValue="">
                <option value="" disabled>Seleccione el tipo de documento</option>
                <option value="cc">Cédula de ciudadanía</option>
                <option value="ti">Tarjeta de identidad</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="document_number"
                placeholder="Número de documento"
                required
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="first_name"
                placeholder="Nombre"
                required
                autoComplete="off"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Apellido"
                required
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Número de contacto"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <select name="gender" required defaultValue="">
                <option value="" disabled>Seleccione su sexo</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <input type="date" name="dob" required />
            </div>

            <div className="form-group">
              <select name="country" required defaultValue="">
                <option value="" disabled>Selecciona tu país de residencia</option>
                <option value="colombia">Colombia</option>
                <option value="argentina">Argentina</option>
                <option value="chile">Chile</option>
              </select>
            </div>

            <div className="form-group">
              <select name="department" defaultValue="">
                <option value="" disabled>Seleccione su departamento</option>
                <option value="norte_de_santander">Norte de Santander</option>
                <option value="santander">Santander</option>
                <option value="antioquia">Antioquia</option>
              </select>
            </div>

            <div className="form-group">
              <select name="city" defaultValue="">
                <option value="" disabled>Seleccione su ciudad</option>
                <option value="cucuta">Cúcuta</option>
                <option value="ocaña">Ocaña</option>
                <option value="medellin">Medellín</option>
                <option value="bucaramanga">Bucaramanga</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="comment"
                placeholder="Comentarios"
                rows="4"
              ></textarea>
            </div>

            <button type="submit">Registrarse</button>
          </form>

          <div className="footer_form">
            <p>¿Ya tienes cuenta? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
