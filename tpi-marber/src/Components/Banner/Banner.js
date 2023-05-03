import React from "react";
import images from "../../assets/images";

const Banner = () => {
  const data = [images.Beer1, images.Beer2];
  return (
    <div className="w-full h-auto">
      <div>
        <div>
          <img
            className="w-screen h-full object-cover"
            src={require(data[0])}
            alt="Img1"
            loading="priority"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
