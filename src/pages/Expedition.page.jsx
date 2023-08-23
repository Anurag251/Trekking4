/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

const ExpeditionPage = () => {
  const { categoriesDatas } = useContext(AllDataContext);

  console.log(categoriesDatas);

  const [data, setData] = useState([]);

  useEffect(() => {
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
      {
        image:
          "https://8kexpeditions.com/uploads/activities/activity-1645600403.png",
        name: "7 Summits",
      },
    ]);
  }, []);

  return (
    <div className="MountainOFKnowledge">
      <section className="bg-color">
        <div className="wrapper">
          <div className="title-part">
            <div className="name">EXPEDITION</div>
            <h5>YALA PEAK CLIMBING | PEAK CLIMBING IN NEPAL |</h5>
          </div>

          <div className="list">
            {categoriesDatas?.map((data, idx) => (
              <Link
                to={`/expedition-details/${data?.id}`}
                key={idx}
              >
                <div className="item">
                  <div className="image-area">
                    <img
                      src={data?.image?.original_image}
                      alt={data?.category_name}
                    />
                  </div>

                  <div className="content">
                    <div className="name">{data?.category_name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpeditionPage;
