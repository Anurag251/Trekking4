/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const HaveChatComponent = ({ title, subTitle, desc }) => {
  const { contactDatas } = useContext(AllDataContext);

  return (
    <div className="HaveChat">
      <section>
        <div className="wrapper">
          <div className="list">
            <div className="item">
              <div className="title-part no-bg">
                <h5 data-aos="fade-down">{title}</h5>

                <div className="name" data-aos="fade-down">
                  {subTitle}
                </div>
              </div>

              <p className="desc" data-aos="fade-down">
                {desc}
              </p>

              <div className="button-group" data-aos="fade-down">
                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  <button className="callBtn">Book A Call Back</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HaveChatComponent;
