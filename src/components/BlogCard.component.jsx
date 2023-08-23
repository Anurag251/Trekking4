/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BlogCardComponent = ({ data }) => {
  return (
    <Link to={`/blog-details/${data.id}`}>
      <div className="BlogCardComponent">
        <div className="image-area">
          <img src={data.image.original_image} alt="" />

          <div className="time">
            <i className="far fa-clock"></i>
            16 AUG
          </div>
        </div>

        <div className="content">
          <div className="name">{data.title}</div>

          <p className="desc">
            These beautiful dunes of the sand are believed to have originated
            from a flood caused back in the 1920's, known among locals as the
            Khumdan Floods. These dunes keep on shifting at the whim of the
            staggering wind storms that rise almost every evenings.{" "}
          </p>

          <button>
            Read More <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardComponent;
