import { useEffect, useState } from "react";
import Museum from "./museum";
import MuseumDetail from "./museumDetail";
import "./museums.css";

function Museums() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

  const [museums, setMuseums] = useState([]);

  const [clickedMuseum, setClickedMuseum] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        setMuseums(museums);
      });
  });

  const onDetail = (id) => {
    setClickedMuseum(id);
  };

  if (clickedMuseum) {
    const currentMuseum = museums.find((museum) => museum.id === clickedMuseum);
    return <MuseumDetail museum={currentMuseum} />;
  } else {
    return (
      <>
        <div className="row squizzed">
          <div className="col-12">
            <div className="category-title-bg">
              <h1 className="category-title">MUSEOS</h1>
            </div>
            <div className="col-12 divisor-line"></div>
          </div>
        </div>
        <div className="row extra-squizzed">
          {museums.map((museum) => (
            <Museum
              key={museum.id}
              museum={museum}
              onDetail={onDetail}
            ></Museum>
          ))}
        </div>
      </>
    );
  }
}
//Banner
//Lista -> Titulo, tarjetas
//Tarjeta
//Detalle
export default Museums;
