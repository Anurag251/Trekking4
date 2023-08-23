import { useContext } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import TeamCardComponent from "../components/TeamCard.component";
import { AllDataContext } from "../context/AllData.context";

const MeetTheTeamPage = () => {
  const { teamDatas } = useContext(AllDataContext);

  return (
    <div className="MeetTheTeamPage">
      <PageBannerComponent
        contentLeft="Get To Know The"
        image="https://i.assetzen.net/i/JPlzqpfxRxey/w:1920/h:600/q:70.webp"
      >
        Sherpa Tech Teams
      </PageBannerComponent>

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
    </div>
  );
};

export default MeetTheTeamPage;
