/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewPackageCardComponent = ({ data }) => {
  return (
    <Link to={`/package-details/${data.id}`}>
      <div className="packageCardComponent">
        <div className="image-area">
          <div className="image">
            <img src={data.image?.original_image} alt={data.title} />
          </div>

          <div className="booking">Booking Open</div>

          <div className="time">{data.duration}</div>
          <div className="country">{data.country}</div>
        </div>

        <div className="content">
          <div className="name-area">
            <div className="name">{data.title}</div>
          </div>

          <div className="card-footer">
            <div className="prices">
              Rs {data.price[0].value && data.price[0].value} /-
            </div>

            <button className="book-btn">Book Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewPackageCardComponent;
