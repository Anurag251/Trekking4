/* eslint-disable react/prop-types */

const PageBannerComponent = ({ contentLeft, image, children }) => {
  return (
    <div className="PageBanner" style={{ backgroundImage: `url(${image})` }}>
      <div className="wrapper">
        {contentLeft ? <h4>{contentLeft}</h4> : null}
        <h1 className={contentLeft ? "contentLeft" : ""}>
          {children}
        </h1>
      </div>
    </div>
  );
};

export default PageBannerComponent;
