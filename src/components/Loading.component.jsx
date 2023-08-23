import Lottie from "lottie-react";
import animationData from "../assets/images/lottieflow-cta-01-2-22968E-linear.json";

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
