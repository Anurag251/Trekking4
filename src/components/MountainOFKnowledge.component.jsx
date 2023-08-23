/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MountainOFKnowledgeComponent = ({ title, subTitle, link }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (title === "DESTINATIONS") {
      setData([
        {
          image:
            "https://images.pexels.com/photos/732895/pexels-photo-732895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          name: "Nepal",
        },
        {
          image:
            "https://images.pexels.com/photos/5728647/pexels-photo-5728647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          name: "Bhutan",
        },
        {
          image:
            "https://images.pexels.com/photos/5204945/pexels-photo-5204945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          name: "Tibet",
        },
        {
          image:
            "https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          name: "India",
        },
      ]);
    }

    if (title === "EXPEDITION") {
      setData([
        {
          image:
            "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          name: "Over 8000 Meters",
        },
        {
          image:
            "https://8kexpeditions.com/uploads/packages/package-1639995142.jpg",
          name: "Over 7000 Meters",
        },
        {
          image:
            "https://8kexpeditions.com/uploads/packages/package-1632986680.jpg",
          name: "Over 6000 Meters",
        },
        {
          image:
            "https://8kexpeditions.com/uploads/packages/package-1639910405.jpg",
          name: "Peak Climbing",
        },
      ]);
    }
  }, [title]);

  return (
    <div className="MountainOFKnowledge">
      <section className="bg-color">
        <div className="wrapper">
          <div className="title-part">
            <div className="name">{title}</div>
            <h5>{subTitle}</h5>
          </div>

          <div className="list">
            {data.map((data, idx) => (
              <Link to="/destination-details/nepal" key={idx}>
                <div className="item">
                  <div className="image-area">
                    <img src={data.image} alt="" />
                  </div>

                  <div className="content">
                    <div className="name">{data.name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="view-all">
          <Link to={link}>
            <button>View All</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MountainOFKnowledgeComponent;
