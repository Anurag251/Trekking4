/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";
import PackageMainDetailsComponent from "./PackageMainDetails.component";
import ItineraryComponent from "./Itinerary.component";

const TripOverviewComponent = ({ data }) => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);
  const [selectedItinerary, setSelectedItinerary] = useState(
    data?.itenarydetails[0]?.trip_title
  );

  return (
    <div
      className={`TripOverview ${
        detailsPageNav === "TripOverview" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "TripOverview" ? "show-details" : ""
            }`}
          >
            <div className="inner-TripOverview">
              <div className="TripOverview-area">
                <div
                  className="main-title"
                  onClick={() => {
                    window.scroll(0, 370);
                    setDetailsPageNav("TripOverview");
                  }}
                >
                  trip overview <i className="fas fa-angle-down"></i>
                </div>

                <div className="inner-details">
                  <div className="main-container">
                    <div className="TripOverviewMainContent">
                      <p
                        className="desc"
                        dangerouslySetInnerHTML={{
                          __html: data.content,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="short-itinerary">
                <div className="main-title">Outline Itinerary</div>
                <div className="inner-details">
                  <div className="main-container">
                    <div className={`all-list "short`}>
                      {data.itenarydetails.map((itinerary, idx) => (
                        <div
                          key={idx}
                          className={`ItineraryCardComponent ${
                            selectedItinerary === itinerary.trip_title
                              ? "active"
                              : ""
                          } `}
                        >
                          <div
                            className="item-title"
                            onClick={() =>
                              setSelectedItinerary(itinerary.trip_title)
                            }
                          >
                            <div className="name">
                              <div className="indicator">{idx + 1}</div>
                              <span> {itinerary.trip_title}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripOverviewComponent;
