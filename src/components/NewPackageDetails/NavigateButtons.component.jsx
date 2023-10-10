import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const NavigateButtonsComponent = ({ data }) => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div className="NavigateButtons">
      <div className="wrapper">
        <div className="button-list">
          {data.content !== null &&
          data.content !== undefined &&
          data.content !== "" ? (
            <button
              className={`navigateBtn ${
                detailsPageNav === "TripOverview" ? "active" : ""
              }`}
              onClick={() => {
                window.scroll(0, 470);
                setDetailsPageNav("TripOverview");
              }}
            >
              Overview
            </button>
          ) : null}

          {(data.itenarydetails !== null &&
            data.itenarydetails !== undefined) ||
          data.itenarydetails.lenght ? (
            data.itenarydetails[0]?.trip_title !== null ? (
              <button
                className={`navigateBtn ${
                  detailsPageNav === "Itinerary" ? "active" : ""
                }`}
                onClick={() => {
                  window.scroll(0, 470);
                  setDetailsPageNav("Itinerary");
                }}
              >
                Itinerary
              </button>
            ) : null
          ) : null}

          {(data.exclude !== null || data.include !== null) &&
          (data.exclude !== undefined || data.include !== undefined) &&
          (data.exclude !== "" || data.include !== "") ? (
            <button
              className={`navigateBtn ${
                detailsPageNav === "Includes & Excludes" ? "active" : ""
              }`}
              onClick={() => {
                window.scroll(0, 470);
                setDetailsPageNav("Includes & Excludes");
              }}
            >
              Includes & Excludes
            </button>
          ) : null}

          {(data.price !== null && data.price !== undefined) ||
          data.price.lenght ? (
            data.price[0]?.trip_title !== null ? (
              <button
                className={`navigateBtn ${
                  detailsPageNav === "DatePrices" ? "active" : ""
                }`}
                onClick={() => {
                  window.scroll(0, 470);
                  setDetailsPageNav("DatePrices");
                }}
              >
                Departure Date & Price
              </button>
            ) : null
          ) : null}

          {data.equipments !== null &&
          data.equipments !== undefined &&
          data.equipments !== "" ? (
            <button
              className={`navigateBtn ${
                detailsPageNav === "Trip Notes" ? "active" : ""
              }`}
              onClick={() => {
                window.scroll(0, 470);
                setDetailsPageNav("Trip Notes");
              }}
            >
              Trip Notes
            </button>
          ) : null}

          <button
            className={`navigateBtn ${
              detailsPageNav === "Tour Gallery" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 470);
              setDetailsPageNav("Tour Gallery");
            }}
          >
            Tour Gallery
          </button>
        </div>

        <div className="last-button">
          <button
            className={`bookNowNutton`}
            onClick={() => {
              window.scroll(0, 470);
              setDetailsPageNav("DatePrices");
            }}
          >
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigateButtonsComponent;
