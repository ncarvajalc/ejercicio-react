import { useState } from "react";
import "./artwork.css";

function Artwork(props) {
  const [name] = useState(props.artwork.name);
  const [description] = useState(props.artwork.description);
  const [image] = useState(props.image);
  return (
    <>
      <div className="col-3">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
      </div>
      <div className="col-9 description">
        <p>{description}</p>
      </div>
    </>
  );
}
//Banner
//Lista -> Titulo, tarjetas
//Tarjeta
//Detalle
export default Artwork;
