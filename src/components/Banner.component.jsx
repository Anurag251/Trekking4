import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper";

import { useContext, useState } from "react";
import { AllDataContext } from "../context/AllData.context";
import { useNavigate } from "react-router-dom";
import { apis } from "../utils/apis";

const BannerComponent = () => {
  const {
    countryDatas,
    setCategoriesDatas,
    selectedDatas,
    setSelectedDatas,
    setMessage,
    bannerDatas,
    setCountPackage,
  } = useContext(AllDataContext);

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    country: "",
    duration: "",
    tripYear: "",
  });

  const [buttonLoading, setButtonLoading] = useState(false);

  const filterData = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (
      formValues.country !== "" ||
      formValues.duration !== "" ||
      formValues.tripYear !== ""
    ) {
      try {
        apis
          .post("/gettrip", {
            country: formValues.country,
            duration: formValues.duration,
            tripyear: formValues.tripYear.split("-")[0],
          })
          .then((res) => {
            setButtonLoading(false);
            if (res.status === 200) {
              if (res.data.data.length) {
                navigate("/search-page", {
                  state: {
                    searchedData: res.data.data,
                  },
                });
                setCountPackage(res.data.data.length);
              } else {
                setMessage({
                  message: true,
                  title: "No Package",
                  type: "error",
                  desc: `No Package available for ${formValues.duration}`,
                });
              }
            }
          })
          .catch((err) => {
            setMessage({
              message: true,
              title: err.code,
              type: "error",
              desc: err.message,
            });

            console.log(err);
            setButtonLoading(false);
          });
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("All fields are required");
      setButtonLoading(false);
    }
  };

  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        effect="fade"
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {/* bannerDatas &&
          bannerDatas.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div className="item">
                <div className="slider-image">
                  <img
                    src="https://images.pexels.com/photos/11568270/pexels-photo-11568270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="slide-image"
                  />
                </div>
                <div className="wrapper">
                  <div className="content-area">
                    <h2>{data.title}</h2>
                    <p>{data.smalltitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )) */}

        <SwiperSlide>
          <div className="item">
            <div className="slider-image">
              <img
                src="https://images.pexels.com/photos/11568270/pexels-photo-11568270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="slide-image"
              />
            </div>
            <div className="wrapper">
              <div className="content-area">
                <h2>Trekking In Nepal</h2>
                <p></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="slider-image">
              <img
                src="https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="slide-image"
              />
            </div>
            <div className="wrapper">
              <div className="content-area">
                <h2>Mountain Climbing</h2>
                <p></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="slider-image">
              <img
                src="https://images.pexels.com/photos/804573/pexels-photo-804573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="slide-image"
              />
            </div>
            <div className="wrapper">
              <div className="content-area">
                <h2>Mount Everest Trekking</h2>
                <p></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerComponent;
