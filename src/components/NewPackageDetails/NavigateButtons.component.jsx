import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const NavigateButtonsComponent = () => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div className="NavigateButtons">
      <div className="wrapper">
        <div className="button-list">
          <button
            className={`navigateBtn ${
              detailsPageNav === "TripOverview" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("TripOverview");
            }}
          >
            Trip Overview
          </button>
          <button
            className={`navigateBtn ${
              detailsPageNav === "Itinerary" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("Itinerary");
            }}
          >
            Itinerary
          </button>
          <button
            className={`navigateBtn ${
              detailsPageNav === "DatePrices" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("DatePrices");
            }}
          >
            Date & Prices
          </button>
          <button
            className={`navigateBtn ${
              detailsPageNav === "MoreInfo" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 600);
              setDetailsPageNav("MoreInfo");
            }}
          >
            Equipments
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigateButtonsComponent;
