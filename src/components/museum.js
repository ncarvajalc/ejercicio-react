import { useState } from "react";
import "./museum.css";

function Museum(props) {
  const [name] = useState(props.museum.name);
  const [city] = useState(props.museum.city);
  const [image] = useState(props.museum.image);

  return (
    <>
      <div className="col-3" onClick={() => props.onDetail(props.museum.id)}>
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{city}</p>
          </div>
        </div>
      </div>
    </>
  );
}
//Banner
//Lista -> Titulo, tarjetas
//Tarjeta
//Detalle
export default Museum;
