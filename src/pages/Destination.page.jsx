/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

const DestinationPage = () => {
  const { countryDatas } = useContext(AllDataContext);

  return (
    <div className="MountainOFKnowledge">
      <section className="bg-color">
        <div className="wrapper">
          <div className="title-part">
            <div className="name">DESTINATIONS</div>
            <h5>BEST DESTINATIONS TO TRAVEL IN SOUTH ASIA</h5>
          </div>

          <div className="list">
            {countryDatas?.map((data, idx) => (
              <Link
                to={`/destination-details/${data?.country_name?.toLowerCase()}`}
                key={idx}
              >
                <div className="item">
                  <div className="image-area">
                    <img src={data?.icon} alt={data?.country_name} />
                  </div>

                  <div className="content">
                    <div className="name">{data?.country_name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
