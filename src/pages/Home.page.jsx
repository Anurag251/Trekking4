import BannerComponent from "../components/Banner.component";
import AboutComponent from "../components/About.component";
import PackageComponent from "../components/Package.component";
import KnowledgeComponent from "../components/Knowledge.component";
import TestinomialComponent from "../components/Testinomial.component";
import BlogComponent from "../components/Blog.component";
import TeamsComponent from "../components/Teams.component";
import WhyChooseUsComponent from "../components/WhyChooseUs.component";
import BreconMountainRescueComponent from "../components/BreconMountainRescue.component";
import HaveChatComponent from "../components/HaveChat.component";
import WhatOurCustomersSaysComponent from "../components/WhatOurCustomersSays.component";
import MountainOFKnowledgeComponent from "../components/MountainOFKnowledge.component";
import AdVentuResComponent from "../components/AdVentuRes.component";
import SacredCommunityComponent from "../components/SacredCommunity.component";
import HelpfulYetisComponent from "../components/HelpfulYetis.component";
import DownloadTripGuideComponent from "../components/DownloadTripGuide.component";
import AboutSacredComponent from "../components/AboutSacred.component";
import SearchBoxComponent from "../components/SearchBox.component";
import VideoBannerComponent from "../components/VideoBanner.component";

const HomePage = () => {
  return (
    <div className="home-page">
      <BannerComponent />

      <SearchBoxComponent />

      <AboutSacredComponent />

      <AdVentuResComponent
        title="Best Selling"
        subTitle="OUR BEST SELLING PACKAGES"
      />

      <MountainOFKnowledgeComponent
        title="DESTINATIONS"
        subTitle="BEST DESTINATIONS TO TRAVEL IN SOUTH ASIA"
        link="/destination"
      />

      <AdVentuResComponent title="TOURS" subTitle="Luxury Tours in Nepal" />

      <MountainOFKnowledgeComponent
        title="EXPEDITION"
        subTitle="Yala Peak Climbing | Peak Climbing In Nepal |"
        link="/expedition"
      />

      <SacredCommunityComponent />

      <VideoBannerComponent />

      <WhyChooseUsComponent />

      <TestinomialComponent />

      <HelpfulYetisComponent />

      {/* <AboutComponent />

      <PackageComponent />

      <KnowledgeComponent />

      <TestinomialComponent />

      <BlogComponent />

      <TeamsComponent /> */}
    </div>
  );
};

export default HomePage;
