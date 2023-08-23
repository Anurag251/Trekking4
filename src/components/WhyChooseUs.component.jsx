import React from "react";

const WhyChooseUsComponent = () => {
  return (
    <div className="why-choose-us">
      <section className="bg-color">
        <div className="wrapper">
          <div className="title-part">
            <div className="name">WHY US?</div>
            <h5>We focus on Safety and Quality Service!!</h5>
          </div>

          <div className="list">
            <div className="item">
              <div className="image">
                <img
                  src="https://iantaylortrekking.com/wp-content/uploads/2019/06/IMG_35311-e1560270642258.jpg"
                  alt=""
                />
              </div>

              <div className="content">
                {/* <i className="fa-solid fa-hand-holding-dollar"></i> */}
                <i className="fa-solid fa-award"></i>

                <div className="name">ta excellence award winner</div>
              </div>
            </div>

            <div className="item">
              <div className="image">
                <img
                  src="https://images.pexels.com/photos/732632/pexels-photo-732632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
              <div className="content">
                <i className="fa-solid fa-shoe-prints"></i>

                <div className="name">unbeatable value</div>
              </div>
            </div>

            <div className="item">
              <div className="image">
                <img
                  src="https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>
              <div className="content">
                <i className="fa-solid fa-people-group"></i>

                <div className="name">professional team</div>
              </div>
            </div>

            <div className="item">
              <div className="image">
                <img
                  src="https://highlightstourism.com/wp-content/uploads/2020/09/lobuche-east-peak-nepal-has-some-of-the-best-ever-popular-trekking-and-mountaineering-peaks.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <i className="fa-solid fa-shield-halved"></i>

                <div className="name">high standard of safety prioritized</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsComponent;
