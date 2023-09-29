/* eslint-disable react/prop-types */
import { useContext } from "react";
import image from "../../assets/images/trekking_peaks.webp";
import PageBannerComponent from "../PageBanner.component";
import NewPackageCardComponent from "../NewPackageCard.component";
import { AllDataContext } from "../../context/AllData.context";

const YouMightAlsoLikeComponent = ({ data }) => {
  const { tripDatas, contactDatas } = useContext(AllDataContext);

  return (
    <div className="TrekkingInNepalPage">
      <div className="title-part" data-aos="fade-down">
        <div className="name">{contactDatas?.branding?.similar_title1}</div>
        <h5>{contactDatas?.branding?.similar_title2}</h5>
      </div>
      <div className="AdVentuRes">
        <section style={{ backgroundColor: "#F7F7F7" }}>
          <div className="wrapper">
            <div className="list">
              {tripDatas &&
                tripDatas
                  .filter((country) => country.id !== data.id)
                  .filter((country) => country.country === data.country)
                  .filter((data, idx) => idx < 6)
                  .map((data, idx) => (
                    <NewPackageCardComponent key={idx} data={data} />
                  ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YouMightAlsoLikeComponent;
