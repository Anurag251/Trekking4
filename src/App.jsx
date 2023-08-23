import HeaderComponent from "./components/Header.component";
import "./assets/styles/main.sass";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import FooterComponent from "./components/Footer.component";
import { PackageDetails } from "./pages/PackageDetails.page";
import { Fragment, useContext, useEffect, useState } from "react";
import { ContactComponent } from "./components/Contact.component";
import BlogPage from "./pages/Blog.page";
import AllPackagePage from "./pages/AllPackage.page";
import SearchPage from "./pages/Search.page";
import LoadingComponent from "./components/Loading.component";
import { AllDataContext } from "./context/AllData.context";
import SuccessMessageComponent from "./components/SuccessMessage.component";
import BlogDetailsPage from "./pages/BlogDetails.page";
import AboutPage from "./pages/About.page";
import SideNavComponent from "./components/SideNav.component";
import ReasonsToChooseUsPage from "./pages/ReasonsToChooseUs.page";
import DestinationsPage from "./pages/Destinations.page";
import WhyChooseUsComponent from "./components/WhyChooseUs.component";
import HaveChatComponent from "./components/HaveChat.component";
import BreconMountainRescueComponent from "./components/BreconMountainRescue.component";
import NewPackageDetailsComponent from "./components/NewPackageDetails/NewPackageDetails.component";
import SearchedPackagePage from "./pages/SearchedPackage.page";
import BloggingPage from "./pages/Blogging.page";
import BloggingDetailsPage from "./pages/BloggingDetails.page";
import MeetTheTeamPage from "./pages/MeetTheTeam.page";
import FlexibilityPromisePage from "./pages/FlexibilityPromise.page";
import AwesomenessGuaranteePage from "./pages/AwesomenessGuarantee.page";
import TestPage from "./pages/Test.page";
import TrekkingInNepalPage from "./pages/TrekkingInNepal.page";
import ToursInNepalPage from "./pages/ToursInNepal.page";
import DestinationDetailsPage from "./pages/DestinationDetails.page";
import ExpeditionsPage from "./pages/Expeditions.page";
import CertificatesPartnersComponent from "./components/CertificatesPartners.component";
import NotFound from "./pages/NotFound.page";
import TestinomialComponent from "./components/Testinomial.component";
import DestinationPage from "./pages/Destination.page";
import ExpeditionPage from "./pages/Expedition.page";
import SearchedDataPage from "./components/PackageList.component";
import ExpeditionDetailsPage from "./pages/ExpeditionDetails.page";

function App() {
  const { loading, contactPopup, setContactPopup } = useContext(AllDataContext);
  const location = useLocation();

  const [scrollingPosition, setScrollingPosition] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrollingPosition(e.target.scrollingElement.scrollTop);
    });
  }, []);

  //   1. Home page
  // 2. Trek, tour, peak climbing, expedition list page
  // 3. List vako trips ko details page
  // 4. About Company
  // 5. Team
  // 6. Booking Terms
  // 7. General Info Page
  // 8. Booking
  // 9. Contacts

  return (
    <div className="app">
      {loading ? (
        <LoadingComponent />
      ) : (
        <Fragment>
          <HeaderComponent />

          <SideNavComponent />

          <SuccessMessageComponent />

          <ContactComponent />

          <div className={`enquiry-sec ${contactPopup ? "active" : ""}`}>
            <button className="enquiry-icon">
              <i className="fas fa-phone"></i>
            </button>

            <p
              className="enquiry-button"
              onClick={() => setContactPopup(!contactPopup)}
            >
              Enquiry
            </p>

            <button className="enquiry-icon">
              <i className="fas fa-envelope"></i>
            </button>
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/packages" element={<AllPackagePage />} />

            <Route path="/destination" element={<DestinationPage />} />

            <Route path="/expedition" element={<ExpeditionPage />} />

            <Route path="/tour" element={<TrekkingInNepalPage />} />

            <Route
              path="/destination-details/:id"
              element={<DestinationDetailsPage />}
            />

            <Route
              path="/expedition-details/:id"
              element={<ExpeditionDetailsPage />}
            />

            <Route path="/search" element={<SearchedDataPage />} />

            <Route
              path="/package-details/:id"
              element={<NewPackageDetailsComponent />}
            />
            <Route path="/search-page" element={<SearchedPackagePage />} />

            <Route
              path="/about-us"
              element={<ReasonsToChooseUsPage />}
            />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
            <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
            {/* <Route path="/details/:id" element={<PackageDetails />} />
            <Route path="/searchs" element={<SearchPage />} />

            <Route path="/about" element={<AboutPage />} />


            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/expeditions" element={<ExpeditionsPage />} />



            <Route
              path="/trekking-in-nepal"
              element={<TrekkingInNepalPage />}
            />

            <Route path="/tours-in-nepal" element={<ToursInNepalPage />} />

            <Route path="/blogging" element={<BloggingPage />} />
            <Route
              path="/blogging-details/:id"
              element={<BloggingDetailsPage />}
            />
            <Route
              path="/flexibility-promise"
              element={<FlexibilityPromisePage />}
            />

            <Route
              path="/awesomeness-guarantee"
              element={<AwesomenessGuaranteePage />}
            />

            <Route
              path="/destination-details/:id"
              element={<DestinationDetailsPage />}
            />

            <Route path="/test-pages" element={<TestPage />} /> */}

            <Route path="*" element={<HomePage />} />
          </Routes>

          <HaveChatComponent />

          {/* <TestinomialComponent /> */}

          <FooterComponent />

          <button
            className={`scroll-to-top ${scrollingPosition > 100 ? "show" : ""}`}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <i className="fas fa-angle-up"></i>
          </button>
        </Fragment>
      )}
    </div>
  );
}

export default App;
