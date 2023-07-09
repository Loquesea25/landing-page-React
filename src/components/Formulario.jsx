const Formulario = () => {
    return (
        <div className="bodyFormulario">
        <div className="contacto">
    <form action="" className="form">
      <h1 className="title">Contáctanos </h1>

      <div className="inputContainer">
      <label  className="label">Nombre Completo: </label>
        <input type="text" className="input" placeholder="Nombre Completo"/>
        
      </div>

      <div className="inputContainer">
      <label  className="label">Email: </label>
        <input type="mail" className="input" placeholder="Email"/>
        
      </div>

      <div className="inputContainer">
      <label  className="label">Número de teléfono: </label>
        <input type="number" className="input" placeholder="Número de teléfono"/>
        
      </div>

      <div className="inputContainer">
      <label  className="label">Fecha: </label>
        <input type="date" className="input" placeholder="Fecha"/>
        
      </div>

      <input type="submit" className="submitBtn" value="Sign up"/>
    </form>
  </div>
  </div>
       

    );
};

    export default Formulario;

   