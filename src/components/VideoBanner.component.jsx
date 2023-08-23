import React from "react";

const VideoBannerComponent = () => {
  return (
    <div className="VideoBanner">
      <div className="wrapper">
        <div className="video-image-area">
          <div className="image">
            <img
              src="https://luxuryholidaynepal.com/_next/image?url=https%3A%2F%2Ffis-api.luxuryholidaynepal.com%2Fmedia%2Fpackage%2Fbanner%2Feverest-heli-tour.jpg&w=1920&q=75"
              alt="video-image"
            />
          </div>

          <div className="content">
            <h1 className="video-title">
              Everest Base Camp Helicopter tour with landing from Kathmandu
            </h1>

            <div className="button-group">
              <button className="explore">Exploer this Trip</button>

              <button className="video-play-btn">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBannerComponent;
