import "./banner.css";

function Banner() {
  return (
    <>
      <div className="row banner-bg">
        <div className="col-6">
          <h1 className="logo">Museos de arte moderno</h1>
        </div>
        <div className="col-6 categories">
          <ul>
            <li>
              <a href="/" className="bold">
                Museos
              </a>
            </li>
            <li>Artistas</li>
            <li>Monumentos</li>
          </ul>
        </div>
      </div>
      <div className="row squizzed">
        <div className="col-12 banner">
          <a href="/">Home</a> {">"} Museos
        </div>
      </div>
    </>
  );
}
//Banner
//Lista -> Titulo, tarjetas
//Tarjeta
//Detalle
export default Banner;
