import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

const GalleryComponent = () => {
  return (
    <div className="GallerySection" id="gallerySec">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <div className="name">gallery</div>
          </div>

          <div className="gallery-area">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              speed={1000}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://i.assetzen.net/i/polEmIQ8Nban/w:1000/h:600/q:100.webp"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://i.assetzen.net/i/bMMzZD8ODNHy/w:1000/h:500/q:100.webp"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://i.assetzen.net/i/6kkjO74oudys/w:1000/h:500/q:100.webp"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://i.assetzen.net/i/IyEercgVkLKL/w:1000/h:600/q:100.webp"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://i.assetzen.net/i/qebCBtB38a3A/w:1000/h:500/q:100.webp"
                  alt=""
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://i.assetzen.net/i/3c2uN8O65PKP/w:1000/h:500/q:100.webp"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryComponent;
