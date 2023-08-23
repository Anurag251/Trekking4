import React, { useContext } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import { Link } from "react-router-dom";
import BloggingCardComponent from "../components/Blogging/BloggingCard.component";
import BloggingBigCardComponsnt from "../components/Blogging/BloggingBigCard.componsnt";
import { AllDataContext } from "../context/AllData.context";
import NewPackageCardComponent from "../components/NewPackageCard.component";

const TrekkingInNepalPage = () => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <div className="TrekkingInNepalPage">
      <PageBannerComponent image="https://i.assetzen.net/i/JPlzqpfxRxey/w:1920/h:600/q:70.webp">
        Our Tour Package
      </PageBannerComponent>

      <div className="AdVentuRes">
        <section>
          <div className="wrapper">
            <div className="list">
              {tripDatas &&
                tripDatas.map((data, idx) => (
                  <NewPackageCardComponent key={idx} data={data} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrekkingInNepalPage;
