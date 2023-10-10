import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";
import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";
import testImage from "../../assets/images/about-birds.jpeg";

const GalleryComponent = () => {
  const { detailsPageNav, setDetailsPageNav, galleryDatas } =
    useContext(AllDataContext);
  return (
    <div
      className={`GallerySection ${
        detailsPageNav === "Tour Gallery" ? "active" : ""
      }`}
      id="gallerySec"
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "Tour Gallery" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("Tour Gallery");
              }}
            >
              Tour Gallery <i className="fas fa-angle-down"></i>
            </div>
            <div className="inner-details">
              <div className="main-container">
                {/* {galleryDatas?.length ? ( */}

                <div className="gallery-list">
                  {/* {galleryDatas &&
                        galleryDatas?.map((image, idx) => (
                          <img src={image} alt="" />
                        ))} */}

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>
                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>
                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>

                  <div className="item">
                    <img src={testImage} alt="testImage" />
                  </div>
                </div>
                {/* ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryComponent;
