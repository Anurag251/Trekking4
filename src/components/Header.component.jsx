import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import Logo from "../assets/images/sherpa-tech-logo.svg";
import telephoneImage from "../assets/images/telephone.png";

const HeaderComponent = () => {
  const {
    categoriesDatas,
    setSideNavHidden,
    sideNavHidden,
    contactPopup,
    setContactPopup,
    contactDatas,
  } = useContext(AllDataContext);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [destinationsSelected, setDestinationsSelected] = useState(false);

  useEffect(() => {
    setSelectedCat(categoriesDatas && categoriesDatas[0].trips);
    setSelectedCatId(categoriesDatas && categoriesDatas[0].id);
  }, [categoriesDatas]);

  const location = useLocation();

  useEffect(() => {
    setDestinationsSelected(false);
  }, [location]);

  return (
    <React.Fragment>
      <header>
        <div className="wrapper">
          <div className="header-top">
            <Link to="/">
              <div className="logo">
                <img
                  // src={contactDatas && contactDatas.branding.logo}
                  src={Logo}
                  alt="logo"
                />
              </div>
            </Link>

            <div className="header-other">
              <div className="phoneNumber">
                <a
                  href={`tel:${contactDatas && contactDatas.branding.phone}`}
                  className={`nav-btn`}
                >
                  <div className="icon">
                    <img src={telephoneImage} alt="" />
                  </div>
                  {contactDatas && contactDatas.branding.phone}
                </a>
                <p>Direct Call or WhatsApp 24/7</p>
              </div>

              <div
                className={`side-nav-btn ${sideNavHidden ? "active" : ""}`}
                onClick={() => setSideNavHidden(!sideNavHidden)}
              >
                <div className="das"></div>
              </div>
            </div>
          </div>

          <div className="inner">
            <ul className="nav-links">
              <li>
                <Link to="/destination">
                  <button
                    className={`nav-btn ${
                      location.pathname === "/destination" ? "active" : ""
                    }`}
                  >
                    DESTINATIONS
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/destination-details/nepal">
                  <button
                    className={`nav-btn ${
                      location.pathname === "/destination-details/nepal"
                        ? "active"
                        : ""
                    }`}
                  >
                    Peak climbing
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/tour">
                  <button
                    className={`nav-btn ${
                      location.pathname === "/tour" ? "active" : ""
                    }`}
                  >
                    Tour
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/expedition">
                  <button
                    className={`nav-btn ${
                      location.pathname === "/expedition" ? "active" : ""
                    }`}
                  >
                    Expedition
                  </button>
                </Link>
              </li>

              <li className="drop-menu">
                <button className="nav-btn">
                  About <i className="fas fa-angle-down"></i>
                </button>

                <ul className="drop-down">
                  <li>
                    <Link to="/meet-the-team">
                      <button
                        className={`${
                          location.pathname === "/meet-the-team" ? "active" : ""
                        }`}
                      >
                        Meet The Team
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/about-us">
                      <button
                        className={`${
                          location.pathname === "/about-us" ? "active" : ""
                        }`}
                      >
                        About Us
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/blog">
                      <button
                        className={`${
                          location.pathname === "/blog" ? "active" : ""
                        }`}
                      >
                        Blog
                      </button>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <button
                  onClick={() => setContactPopup(!contactPopup)}
                  className={`nav-btn`}
                >
                  Contact Us
                </button>
              </li>

              {/* <li className="loginMember">
        <a href="#">
          <button
            onClick={() => setContactPopup(!contactPopup)}
            className={`nav-btn`}
          >
            Members <br /> Login
          </button>
        </a>
      </li> */}
            </ul>
          </div>
        </div>
      </header>

      <div className={`big-drop-down ${destinationsSelected ? "active" : ""}`}>
        <div className="link-cagtegory">
          <ul>
            {categoriesDatas &&
              categoriesDatas.map((data, idx) => (
                <li
                  className={`${data.id === selectedCatId ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${data.image.original_image})`,
                  }}
                  key={idx}
                  onClick={() => {
                    setSelectedCat(data.trips);
                    setSelectedCatId(data.id);
                  }}
                >
                  <span>{data.category_name}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="link-details">
          <div className="link-title">
            <h4>Package</h4>
            <button>
              <Link to="/packages">View All</Link>
            </button>
          </div>

          <ul>
            {selectedCat &&
              selectedCat
                .filter((data, idx) => idx < 15)
                .map((data, idx) => (
                  <li key={idx}>
                    <Link to={`/package-details/${data.id}`}>{data.title}</Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
