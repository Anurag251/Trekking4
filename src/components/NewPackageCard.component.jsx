/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewPackageCardComponent = ({ data }) => {
  return (
    <Link to={`/package-details/${data.slug}`}>
      <div className="packageCardComponent" data-aos="fade-down">
        <div className="image-area">
          <div className="image">
            <img src={data.image?.big_image_two} alt={data.title} />
          </div>
          {data.recommended === 1 ? (
            <div className="booking">Booking Open</div>
          ) : null}

          <div className="time">{data.duration}</div>
          <div className="country">{data.country}</div>
        </div>

        <div className="content">
          <div className="name-area">
            <div className="name">{data.title}</div>
          </div>

          <div className="card-footer">
            <div className="prices">
              {data.price[0].value && data.price[0].value}
            </div>

            <button className="book-btn">See Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewPackageCardComponent;
