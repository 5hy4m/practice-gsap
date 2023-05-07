import React, { useRef, useEffect } from "react";
import "./App.scss";
import { gsap, Power3 } from "gsap";

import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";
import arrow from "./images/arrow-right.svg";

function App() {
  const app = useRef(null);
  const images = useRef(null);

  const tl = new gsap.timeline();

  useEffect(() => {
    gsap.to(app.current, { duration: 0, css: { visibility: "visible" } });

    console.log(app.current);
    const girlImage = images.current.firstElementChild;
    const boyImage = images.current.lastElementChild;

    tl.from(girlImage, { duration: 1.2, y: 1280, ease: Power3.easeOut })
      .from(
        girlImage.firstElementChild,
        { duration: 2, scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(boyImage, { duration: 1.2, y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        boyImage.firstElementChild,
        { duration: 2, scale: 1.6, ease: Power3.easeOut },
        0.2
      );
  }, []);

  return (
    <div ref={app} className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={images}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
