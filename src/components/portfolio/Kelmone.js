import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importing Gallery Images */
import img1 from "../../img/kelmone/KEL1.PNG";
import img2 from "../../img/kelmone/KEL2.PNG";
import img3 from "../../img/kelmone/KEL3.PNG";
import img4 from "../../img/kelmone/KEL4.PNG";
import img5 from "../../img/kelmone/KEL5.PNG";
import video from "../../img/kelmone/kelmone.mp4";

import Carousel from "react-bootstrap/Carousel";
import ModalImage from "react-modal-image";

export default function Kelmone() {
  return (
    <div id="kelmone">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <video
            id="kelmone-vid"
            className="gallery-img"
            src={video}
            autoPlay
            loop
            controls
            controlsList="fullscreen nodownload"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img3} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img4} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="gallery-img w-100" src={img5} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
