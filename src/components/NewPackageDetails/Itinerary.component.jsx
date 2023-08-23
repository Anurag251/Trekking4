/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";
import HtmlToParagraphs from "../HtmlToParagraphs.component";
import ItineraryCardComponent from "./ItineraryCard.component";

const ItineraryComponent = ({ data }) => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`ItinerarySection ${
        detailsPageNav === "Itinerary" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "Itinerary" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("Itinerary");
              }}
            >
              Itinerary <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                <div className="all-list">
                  {data.itenarydetails.map((data, idx) => (
                    <ItineraryCardComponent data={data} key={idx} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItineraryComponent;
