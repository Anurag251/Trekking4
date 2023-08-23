/* eslint-disable react/prop-types */
import iconClimb from "../../assets/images/hiking.png";
import iconMountain from "../../assets/images/mountain.png";
import iconPrice from "../../assets/images/price-tag.png";
import iconCalendar from "../../assets/images/calendar.png";

const PackageMainDetailsComponent = ({ data }) => {
  return (
    <div className="PackageMainDetails">
      <div className="wrapper">
        <ul className="item-list">
          <li>
            <img src={iconClimb} alt="" />
            CHALLENGING
          </li>

          <li>
            <img src={iconMountain} alt="" />

            {data.elevation}
          </li>

          <li>
            <img src={iconCalendar} alt="" />

            {data.duration}
          </li>

          <li className="price">
            <img src={iconPrice} alt="" />

            {data.price.length !== 0 ? (
              <div className="price">
                {data.price.length
                  ? data.price[0].value && data.price[0].value
                  : null}
              </div>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PackageMainDetailsComponent;
