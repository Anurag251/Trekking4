/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import NewPackageCardComponent from "./NewPackageCard.component";
import { AllDataContext } from "../context/AllData.context";
import { Link } from "react-router-dom";

const AdVentuResComponent = ({ title, subTitle }) => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <div className="AdVentuRes">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <div className="name">{title}</div>
            <h5>{subTitle}</h5>
          </div>

          <div className="list">
            {tripDatas &&
              tripDatas
                .filter((data, idx) => idx < 4)
                .map((data, idx) => (
                  <NewPackageCardComponent key={idx} data={data} />
                ))}
          </div>

          <div className="view-all">
            <Link to="/packages">
              <button>View All</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdVentuResComponent;
