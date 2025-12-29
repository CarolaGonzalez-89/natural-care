import cremas from "../../assets/myimages/cremas.jpg";

function Contacto() {
  return (
    <div className="div-contacto">
      <div>
        <h2>NaturalCare</h2>
        <h3 className="h3-contacto">
          Nuestro equipo está para ayudarte en tu elección de productos y rutina
          en cada paso del cuidado de tu piel
        </h3>

        <ul>
          <li>• Email: naturalcare@.hotmail.com</li>
          <li>• WhatsApp:+54 9 3825416367</li>
          <li>• Instagram:@naturalcare</li>
          <li>• Horario: Lun-Vie 9 a 18 h</li>
        </ul>
        <img className="imagen-contacto" src={cremas} alt="imagen cremas" />
      </div>

      <div className="container-form">
        <h3 className="h3-contacto">
          Contactanos para obtener tu servicio de asesoramiento personalizado
        </h3>
        <form className="form">
          <input className="input-contacto" type="text" placeholder="Nombre" />
          <input className="input-contacto" type="email" placeholder="Email" />
          <input
            className="input-contacto-mensaje"
            type="text"
            placeholder="Mensaje"
          />
          <input
            className="input-contacto-boton"
            type="submit"
            value="Enviar"
          />
        </form>
      </div>
    </div>
  );
}
export default Contacto;
