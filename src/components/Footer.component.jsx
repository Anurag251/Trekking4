/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import footerImage from "../assets/images/footerbg.jpg";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import Logo from "../assets/images/sherpa-tech-logo.svg";
import HtmlToParagraphs from "./HtmlToParagraphs.component";
import OurPartnersComponent from "./OurPartners.component";
import HelpfulYetisComponent from "./HelpfulYetis.component";

const FooterComponent = () => {
  const {
    categoriesDatas,
    setSelectedCate,
    contactDatas,
    aboutDetails,
    contactPopup,
    setContactPopup,
  } = useContext(AllDataContext);

  const navigate = useNavigate();

  return (
    <footer
      style={{
        backgroundImage: `url(https://8kexpeditions.com/images/about-intro.jpg)`,
      }}
    >
      <div className="wrapper">
        <OurPartnersComponent />

        <div className="footer-list">
          <div className="item">
            <Link to="/">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
            </Link>

            {/* <HtmlToParagraphs
              data={
                aboutDetails !== ""
                  ? aboutDetails !== null
                    ? aboutDetails[0].description
                    : "No Descriptions"
                  : ""
              }
              length={200}
            /> */}
          </div>

          <div className="item">
            <div className="f-title">Useful Links</div>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/packages">Adventures</Link>
              </li>
              <li>
                <Link to="/blogging">Blog</Link>
              </li>
              <li onClick={() => setContactPopup(!contactPopup)}>Contact</li>
            </ul>
          </div>

          <div className="item">
            <div className="f-title">Packages</div>

            <ul>
              {categoriesDatas &&
                categoriesDatas.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedCate(data.id);
                      navigate(`/expedition-details/${data.id}`, {
                        state: {
                          searchedData: data.trips,
                        },
                      });
                    }}
                  >
                    {data.category_name}
                  </li>
                ))}
            </ul>
          </div>

          <div className="item">
            <div className="f-title">Support Links</div>

            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                {contactDatas && contactDatas.branding.address}
              </li>
              <li>
                <i className="fas fa-phone"></i>

                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  {contactDatas && contactDatas.branding.phone}
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                {/*  <a
                  href={`mailto:${contactDatas && contactDatas.branding.email}`}
                >
                  {contactDatas && contactDatas.branding.email}
                </a> */}

                <a href={`mailto:info@sherpa-tech.com`}>info@sherpa-tech.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <HelpfulYetisComponent /> */}

        <div className="copyright">
          <span>© Copyright 2022 Company </span>

          <div className="icons">
            {contactDatas && contactDatas.social_media.fb_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.fb_url}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.google_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.google_url}>
                  <i className="fab fa-google"></i>
                </a>
              </div>
            ) : null}

            {contactDatas &&
            contactDatas.social_media.instagram_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.instagram_url}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.linkedin_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.linkedin_url}>
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.fb_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.fb_url}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            ) : null}

            {contactDatas &&
            contactDatas.social_media.pinterest_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.pinterest_url}>
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.twitter_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.twitter_url}>
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.youtube_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.youtube_url}>
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
