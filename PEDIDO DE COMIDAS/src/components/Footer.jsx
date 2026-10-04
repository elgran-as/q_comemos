import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import desarrollo from "../assets/1.png";
import diseno from "../assets/2.png";
import contenido from "../assets/3.png";

const Footer = () => {
  const equipo = [
    { nombre: "Integrante 1", rol: "Diseño y experiencia", imagen: diseno },
    { nombre: "Integrante 2", rol: "Desarrollo web", imagen: desarrollo },
    { nombre: "Integrante 3", rol: "Contenido y catálogo", imagen: contenido },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="logo footer-logo" to="/">
            <img className="logo-image" src={logo} alt="" />
            <span>Q´ Comemos</span>
          </Link>
          <p>Comida rica, hecha como en casa.</p>
        </div>
        <section className="footer-column" aria-labelledby="footer-empresa">
          <h2 id="footer-empresa">La empresa</h2>
          <p>© 2026 Q´ Comemos. Todos los derechos reservados.</p>
          <p>Contenido e identidad visual protegidos por propiedad intelectual.</p>
        </section>
        <section className="footer-column" aria-labelledby="footer-contacto">
          <h2 id="footer-contacto">Contacto y privacidad</h2>
          <p>Contacto de ejemplo: <a href="mailto:contacto@qcomemos.com.ar">contacto@qcomemos.com.ar</a></p>
          <p>Esta pre-entrega no envía pedidos a un servidor ni procesa pagos.</p>
          <p>Sede de ejemplo: Buenos Aires, Argentina.</p>
        </section>
      </div>
      <section className="footer-team" aria-labelledby="footer-equipo">
        <div className="footer-team-heading">
          <h2 id="footer-equipo">Nuestro equipo</h2>
          <p>Perfiles ilustrados del equipo.</p>
        </div>
        <div className="team-cards">
          {equipo.map((persona) => (
            <article className="team-card" key={persona.nombre}>
              <img className="team-avatar" src={persona.imagen} alt={`Ilustración de ${persona.rol}`} />
              <div>
                <h3>{persona.nombre}</h3>
                <p>{persona.rol}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <p className="copyright">Hamburguesas, pizzas, papas fritas, empanadas y mucho más.</p>
    </footer>
  );
};

export default Footer;
