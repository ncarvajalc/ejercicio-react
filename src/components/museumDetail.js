import { useState } from "react";
import Artwork from "./artwork";
import "./museumDetail.css";

function MuseumDetail(props) {
  const [name] = useState(props.museum.name);
  const [artworks] = useState(props.museum.artworks);
  const [image] = useState(props.museum.image);
  return (
    <>
      <div className="row squizzed">
        <div className="col-12">
          <div className="category-title-bg">
            <h1 className="category-title">{name}: Obras principales</h1>
          </div>
          <div className="col-12 divisor-line"></div>
        </div>
      </div>
      <div className="row extra-squizzed">
        {artworks.map((artwork) => (
          <Artwork key={artwork.id} artwork={artwork} image={image}></Artwork>
        ))}
      </div>
    </>
  );
}
//Banner
//Lista -> Titulo, tarjetas
//Tarjeta
//Detalle
export default MuseumDetail;
