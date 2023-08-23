import React, { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const HaveChatComponent = () => {
  const { contactDatas } = useContext(AllDataContext);

  return (
    <div className="HaveChat">
      <section>
        <div className="wrapper">
          <div className="list">
            <div className="item">
              <div className="title-part">
                <h5>WE'D LOVE TO</h5>

                <div className="name">Have a cHat</div>
              </div>

              <p className="desc">
                If you would like to discuss your next adventure, have any
                questions or simply just a good old chin wag, then please call
                us, or send us a message.
              </p>

              <div className="button-group">
                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  <button className="callBtn">Book A Call Back</button>
                </a>

                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  <button className="phoneBtn">
                    <i className="fas fa-phone"></i>{" "}
                    {contactDatas && contactDatas.branding.phone}
                  </button>
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
