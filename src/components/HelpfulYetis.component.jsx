import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const HelpfulYetisComponent = () => {
  const { teamDatas } = useContext(AllDataContext);

  return (
    <section className="bg-color">
      <div className="HelpfulYetis">
        <div className="wrapper">
          <div className="title-part">
            <div className="name">Teams</div>
            <h5>Talk to Experts</h5>
          </div>

          <div className="list">
            {teamDatas &&
              teamDatas
                .filter((dara, idx) => idx < 4)
                .map((data, idx) => (
                  <div className="item" key={idx}>
                    <div className="image-area">
                      <img src={data.image} alt="" />
                    </div>

                    <div className="content">
                      <div className="name">{data.name}</div>
                      <div className="phone">{data.description}</div>
                    </div>
                  </div>
                ))}

            {teamDatas &&
              teamDatas
                .filter((dara, idx) => idx < 4)
                .map((data, idx) => (
                  <div className="item" key={idx}>
                    <div className="image-area">
                      <img src={data.image} alt="" />
                    </div>

                    <div className="content">
                      <div className="name">{data.name}</div>
                      <div className="phone">{data.description}</div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpfulYetisComponent;
