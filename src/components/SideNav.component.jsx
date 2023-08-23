import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import logoImage from "../assets/images/sherpa-tech-logo.svg";
import { Link, useLocation } from "react-router-dom";

const SideNavComponent = () => {
  const { sideNavHidden, setSideNavHidden, setContactPopup, contactPopup } =
    useContext(AllDataContext);
  const location = useLocation();

  return (
    <div className={`side-nav ${sideNavHidden ? "active" : ""}`}>
      <div
        className="side-nav-close-btn"
        onClick={() => setSideNavHidden(false)}
      >
        <i className="fas fa-times"></i>
      </div>

      <div className="logo">
        <Link to="/" onClick={() => setSideNavHidden(false)}>
          <img src={logoImage} alt="" />
        </Link>
      </div>

      <ul className="nav-links">
        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/destination-details/nepal">
            <button
              className={`nav-btn ${
                location.pathname === "/destination-details/nepal"
                  ? "active"
                  : ""
              }`}
            >
              Nepal Trek
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/destination-details/bhutan">
            <button
              className={`nav-btn ${
                location.pathname === "/destination-details/bhutan"
                  ? "active"
                  : ""
              }`}
            >
              Bhutan Trek
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/search-page">
            <button
              className={`nav-btn ${
                location.pathname === "/search-page" ? "active" : ""
              }`}
            >
              Tours
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/tours-in-nepal">
            <button
              className={`nav-btn ${
                location.pathname === "/tours-in-nepal" ? "active" : ""
              }`}
            >
              Nepal Marathon
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/">
            <button
              className={`nav-btn ${
                location.pathname === "/noooo" ? "active" : ""
              }`}
            >
              Lama Land Homestay
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <button
            onClick={() => setContactPopup(!contactPopup)}
            className={`nav-btn`}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideNavComponent;
