import PageBannerComponent from "../components/PageBanner.component";
import AboutPageGalleryComponent from "../components/AboutPageGallery.component";
import { Fragment, useContext, useEffect, useState } from "react";
import { AllDataContext } from "../context/AllData.context";

import { useLocation } from "react-router-dom";

const ReasonsToChooseUsPage = () => {
  const location = useLocation();
  const { aboutDetails } = useContext(AllDataContext);

  const [thisPageData, setThisPageData] = useState(null);

  useEffect(() => {
    aboutDetails?.forEach((data) => {
      if (`/about/${data.slug}` === location.pathname) {
        setThisPageData(data);
      }
    });
  }, [aboutDetails, location.pathname]);

  return (
    <div className="ReasonsToChooseUs">
      <PageBannerComponent
        image={
          thisPageData?.page_type === 7
            ? thisPageData?.contents[0]?.image?.big_image_two
            : thisPageData?.image?.big_image_two
        }
      >
        {thisPageData?.title}
      </PageBannerComponent>

      <div className="wrapper">
        {thisPageData?.description !== null ? (
          <section>
            <div className="about-content" data-aos="fade-down">
              <p
                className="desc"
                dangerouslySetInnerHTML={{
                  __html: thisPageData?.description,
                }}
              />
            </div>
          </section>
        ) : null}

        {thisPageData?.page_type !== 7
          ? thisPageData?.contents?.map((data, idx) => (
              <Fragment key={idx}>
                {data?.image !== null ? (
                  <section
                    className={`with-image ${
                      data?.image_id === null ? "fullView" : ""
                    }`}
                  >
                    {data?.image_id !== null ? (
                      <div className="image" data-aos="fade-down">
                        <img
                          src={data?.image?.big_image_two}
                          alt={data?.text}
                        />
                      </div>
                    ) : null}

                    <div className="about-content" data-aos="fade-down">
                      <h3>{data?.text}</h3>

                      <p
                        className="desc"
                        dangerouslySetInnerHTML={{
                          __html: data?.content,
                        }}
                      />
                    </div>
                  </section>
                ) : (
                  <section>
                    <div className="about-content" data-aos="fade-down">
                      <h3>{data?.text}</h3>

                      <p
                        className="desc"
                        dangerouslySetInnerHTML={{
                          __html: data?.content,
                        }}
                      />
                    </div>
                  </section>
                )}
              </Fragment>
            ))
          : null}

        <section>
          <AboutPageGalleryComponent />
        </section>
      </div>
    </div>
  );
};

export default ReasonsToChooseUsPage;
