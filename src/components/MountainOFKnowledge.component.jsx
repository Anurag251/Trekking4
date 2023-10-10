/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

const MountainOFKnowledgeComponent = ({ title, subTitle, link }) => {
  const { categoriesDatas } = useContext(AllDataContext);

  return (
    <div className="MountainOFKnowledge">
      <div className="title-part" data-aos="fade-down">
        <div className="name">{title}</div>
        <h5>{subTitle}</h5>
      </div>
      <section className="bg-color">
        <div className="wrapper">
          <div className="list">
            {categoriesDatas &&
              categoriesDatas
                .filter((data, idx) => idx < 4)
                .map((data, idx) => (
                  <Link to={`${data?.slug}`} key={idx}>
                    <div
                      className="item"
                      title={data?.category_name}
                      data-aos="fade-down"
                    >
                      <div className="image-area">
                        <img
                          src={data?.image?.big_image_two}
                          alt={data?.category_name}
                        />
                      </div>

                      <div className="content">
                        <div className="name">{data?.category_name}</div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>

        {/* categoriesDatas?.length > 4 ? (
          <div className="view-all">
            <Link to={link}>
              <button>View All</button>
            </Link>
          </div>
        ) : null */}
      </section>
    </div>
  );
};

export default MountainOFKnowledgeComponent;
