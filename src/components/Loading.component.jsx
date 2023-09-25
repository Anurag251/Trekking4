import Lottie from "lottie-react";
import animationData from "/public/lottieflow-loading-04-1-0168b7-easey.json";

const LoadingComponent = () => {
  return (
    <div className="page-loading">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default LoadingComponent;
