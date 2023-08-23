import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper";
import { AllDataContext } from "../context/AllData.context";

const AboutSacredComponent = () => {
  const { aboutDetails } = useContext(AllDataContext);

  return (
    <div className="About_us">
      <section className="bg-color">
        <div className="wrapper">
          <div className="item">
            <div className="images-area">
              <img
                src="https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>

            <div className="content">
              <h1>About Sherpa-Tech</h1>
              {/* <p
                className="desc"
                dangerouslySetInnerHTML={{
                  __html:
                    aboutDetails !== null
                      ? aboutDetails[1].description.length > 500
                        ? `${aboutDetails[1].description.slice(0, 500)}...`
                        : aboutDetails[1].description
                      : "",
                }}
              /> */}

              <p
                className="desc"
                dangerouslySetInnerHTML={{
                  __html:
                    "Towering high above Nepal, Tibet and Bhutan are the majestic Himalayan Mountains, home to the highest and most magnificent peaks on earth. To the people of the region, these mountains are sacred. Most know of Everest, the highest peak on the planet. <br> <br> A peak conquered for the first time in 1953 by Sir  Edmund Hillary and Tenzing Towering high above Nepal, Tibet and Bhutan are the majestic Himalayan Mountains, home to the highest and most magnificent peaks on earth. To the people of the region, these mountains are sacred. Most know of Everest, the highest peak on the planet. A peak conquered for the first time in 1953 by Sir  Edmund Hillary and Tenzing <br /> <br /> Towering high above Nepal, Tibet and Bhutan are the majestic Himalayan Mountains...",
                }}
              />

              <div className="button-group">
                <Link to="/about-us">
                  <button>Why Choose Sherpa Tech?</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSacredComponent;
