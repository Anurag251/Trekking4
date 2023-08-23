import { Fragment, useContext, useEffect, useState } from "react";
import PackageBannerComponent from "./PackageBanner.component";
import NavigateButtonsComponent from "./NavigateButtons.component";
import TripOverviewComponent from "./TripOverview.component";
import ItineraryComponent from "./Itinerary.component";
import DateAndPriceComponent from "./DateAndPrice.component";
import ReviewsComponent from "./Reviews.component";
import TripExtensionsComponent from "./TripExtensions.component";
import VideosComponent from "./Videos.component";
import MoreInfoComponent from "./MoreInfo.component";
import GalleryComponent from "./Gallery.component";
import { AllDataContext } from "../../context/AllData.context";
import { useLocation } from "react-router-dom";
import LoadingComponent from "../Loading.component";
import PackageBookingComponent from "../PackageDetail/PackageBooking.component";

const NewPackageDetailsComponent = () => {
  const { tripDatas } = useContext(AllDataContext);
  const [choosenPrice, setChoosenPrice] = useState(null);

  const [selectedData, setSelectedData] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (tripDatas !== null) {
      tripDatas.forEach((data) => {
        if (location.pathname.split("/")[2] == data.id) {
          setSelectedData(data);
        }
      });
    }
  }, [location, tripDatas]);

  return (
    <Fragment>
      {selectedData !== null ? (
        <div className="NewPackageDetails">
          <PackageBannerComponent image={selectedData.image.original_image}>
            {selectedData.title.toLowerCase()}
          </PackageBannerComponent>

          <PackageBookingComponent
            selectedData={selectedData}
            choosenPrice={choosenPrice}
            setChoosenPrice={setChoosenPrice}
            popup={true}
          />

          <NavigateButtonsComponent data={selectedData} />

          <TripOverviewComponent data={selectedData} />

          <ItineraryComponent data={selectedData} />

          <DateAndPriceComponent data={selectedData} />

          <ReviewsComponent data={selectedData} />

          <TripExtensionsComponent data={selectedData} />

          <VideosComponent data={selectedData} />

          <MoreInfoComponent data={selectedData} />

          <GalleryComponent data={selectedData} />
        </div>
      ) : (
        <LoadingComponent />
      )}
    </Fragment>
  );
};

export default NewPackageDetailsComponent;
