import React from "react";

function Banner() {
  const data = [
    "https://i0.wp.com/www.muestrasgratisychollos.com/wp-content/uploads/2022/09/Grandes-marcas-de-cerveza-reparten-150000-euros.jpg?fit=696%2C385&ssl=1",
    "https://fiestacerca.vtexassets.com/assets/vtex.file-manager-graphql/images/6828c8dc-15d2-42f4-bf61-221abe8ec262___dbfcec9b4638808e630a5f64b1470b98.png",
  ];
  return (
    <div className="body">
      <div>
        <div>
          <img src={data[0]} alt="Img1" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
