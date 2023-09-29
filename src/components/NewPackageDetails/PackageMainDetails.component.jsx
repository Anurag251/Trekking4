/* eslint-disable react/prop-types */
import {
  IconAccommodation,
  IconBestSeason,
  IconDuration,
  IconGroupSize,
  IconMaxAltitude,
  IconPriceStart,
  IconTourGrade,
  IconTransport,
} from "../Icons.component";

const PackageMainDetailsComponent = ({ data }) => {
  return (
    <div className="PackageMainDetails">
      <div className="wrapper">
        <ul className="item-list">
          {data.groupsize !== null ? (
            <li>
              <div className="icon">
                <IconGroupSize />
              </div>
              <span>{data.groupsize}</span>
            </li>
          ) : null}

          <li>
            <div className="icon">
              <IconMaxAltitude />
            </div>

            <span> {data.elevation}</span>
          </li>

          <li>
            <div className="icon">
              <IconDuration />
            </div>

            <span> {data.duration}</span>
          </li>

          <li>
            <div className="icon">
              <IconPriceStart />
            </div>

            <div className="content">
              {data.price.length !== 0 ? (
                <div className="price">
                  {data.price.length
                    ? data.price[0].value && data.price[0].value
                    : null}
                </div>
              ) : null}
            </div>
          </li>

          <li>
            <div className="icon">
              <IconTourGrade />
            </div>

            <span> {data.grade}</span>
          </li>

          <li>
            <div className="icon">
              <IconBestSeason />
            </div>

            <span> {data.season}</span>
          </li>

          <li>
            <div className="icon">
              <IconAccommodation />
            </div>

            <span> {data.duration}</span>
          </li>

          <li>
            <div className="icon">
              <IconTransport />
            </div>

            <span> {data.route}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PackageMainDetailsComponent;
