/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { apis } from "../utils/apis";

export const AllDataContext = createContext();

export const AllDataProvider = ({ children }) => {
  const [bannerDatas, setBannerDatas] = useState(null);
  const [blogDatas, setBlogDatas] = useState(null);
  const [tripDatas, setTripDatas] = useState(null);
  const [teamDatas, setTeamDatas] = useState(null);
  const [reviewDatas, setReviewDatas] = useState(null);
  const [countryDatas, setCountryDatas] = useState(null);
  const [categoriesDatas, setCategoriesDatas] = useState(null);
  const [galleryDatas, setGalleryDatas] = useState(null);
  const [aboutDetails, setAboutDetails] = useState(null);
  const [sideNavHidden, setSideNavHidden] = useState(false);
  const [filterPackage, setFilterPackage] = useState(false);
  const [contactDatas, setContactDatas] = useState(null);
  const [quickLinkDatas, setQuickLinkDatas] = useState(null);
  const [contactPopup, setContactPopup] = useState(false);
  const [countPackage, setCountPackage] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [bookingPopupForm, setBookingPopupForm] = useState({
    isBookingPopupForm: false,
    date: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    message: false,
    title: "",
    type: "",
    desc: "",
  });

  const [selectedCate, setSelectedCate] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [selectedDatas, setSelectedDatas] = useState(null);
  const [detailsPageNav, setDetailsPageNav] = useState("TripOverview");

  useEffect(() => {
    if (
      bannerDatas === null &&
      blogDatas === null &&
      tripDatas === null &&
      teamDatas === null &&
      reviewDatas === null &&
      countryDatas === null &&
      categoriesDatas === null
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [
    bannerDatas,
    blogDatas,
    tripDatas,
    teamDatas,
    reviewDatas,
    countryDatas,
    categoriesDatas,
  ]);

  useEffect(() => {
    /****** banner ******/
    apis
      .get("/banner")
      .then((res) => {
        if (res.status === 200) {
          setBannerDatas(res.data.data);
          // console.log("banner: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** trip ******/
    apis
      .get("/trip")
      .then((res) => {
        if (res.status === 200) {
          setTripDatas(res.data.data);
          setCountPackage(res.data.data?.length);
          // console.log("trip: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** blog ******/
    apis
      .get("/home/content")
      .then((res) => {
        if (res.status === 200) {
          setBlogDatas(res.data.data && res.data.data.latest_post);
          // console.log("blog: ");
          // console.log(res.data.data.latest_post);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** teams ******/
    apis
      .get("/teams")
      .then((res) => {
        if (res.status === 200) {
          setTeamDatas(res.data.data);
          // console.log("teams: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** review ******/
    apis
      .get("/review")
      .then((res) => {
        if (res.status === 200) {
          setReviewDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** country ******/
    apis
      .get("/country")
      .then((res) => {
        if (res.status === 200) {
          setCountryDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/tripcategory")
      .then((res) => {
        if (res.status === 200) {
          setCategoriesDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/gallery")
      .then((res) => {
        if (res.status === 200) {
          setGalleryDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/page")
      .then((res) => {
        if (res.status === 200) {
          setAboutDetails(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/quicklink")
      .then((res) => {
        if (res.status === 200) {
          setQuickLinkDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/settings")
      .then((res) => {
        if (res.status === 200) {
          setContactDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AllDataContext.Provider
      value={{
        loading,
        setLoading,
        bannerDatas,
        setBannerDatas,
        blogDatas,
        setBlogDatas,
        tripDatas,
        setTripDatas,
        reviewDatas,
        setReviewDatas,
        teamDatas,
        setTeamDatas,
        countryDatas,
        setCountryDatas,
        categoriesDatas,
        setCategoriesDatas,
        message,
        setMessage,
        selectedCate,
        setSelectedCate,
        galleryDatas,
        setGalleryDatas,
        aboutDetails,
        setAboutDetails,
        sideNavHidden,
        setSideNavHidden,
        filterPackage,
        setFilterPackage,
        searchData,
        setSearchData,
        selectedDatas,
        setSelectedDatas,
        contactDatas,
        setContactDatas,
        quickLinkDatas,
        setQuickLinkDatas,
        contactPopup,
        setContactPopup,
        detailsPageNav,
        setDetailsPageNav,
        countPackage,
        setCountPackage,
        showFilter,
        setShowFilter,
        bookingPopupForm,
        setBookingPopupForm,
      }}
    >
      {children}
    </AllDataContext.Provider>
  );
};
