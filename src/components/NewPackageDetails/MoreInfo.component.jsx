/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const MoreInfoComponent = ({ data }) => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`MoreInfoSection ${
        detailsPageNav === "MoreInfo" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "MoreInfo" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("MoreInfo");
              }}
            >
              Equipments <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                <div className="TripOverviewMainContent">
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: data.equipments,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreInfoComponent;
