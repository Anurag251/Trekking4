import React, { useState, useEffect, Fragment, useContext } from "react";
import HtmlToParagraphs from "./HtmlToParagraphs.component";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

const InstagramFeed = () => {
  const { quickLinkDatas } = useContext(AllDataContext);
  const [feedData, setFeedData] = useState(null);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const accessToken =
          "IGQWROdXJLMjhSYlRRZAUVxc2pDYnFzXzZAjNnl0Wld2ZAFMtSzViajhWQm5yOG04YjM3OFk3bXlwWWY5WXlBcEpzYjgySmZABS0FwQ3A4dElqWDBIZAlo2eXd0dlE0ejhVYkxXbDM2cW5MbjVzX2FobDBkRmlzcERnbEUZD"; // Your Instagram Access Token
        const endpoint = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink,thumbnail_url,timestamp&access_token=${accessToken}`;

        const response = await fetch(endpoint);
        if (!response.ok) {
          const responseData = await response.json();
          console.error(
            "Error fetching Instagram feed. Response:",
            responseData
          );
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFeedData(data.data);
      } catch (error) {
        console.error("Error fetching Instagram feed:", error);
      }
    };

    fetchInstagramFeed();
  }, []);

  function findWord(word, str) {
    return RegExp("\\b" + word + "\\b").test(str);
  }

  useEffect(() => {
    feedData?.map((data) => {
      if (findWord("bird", data.caption)) {
        console.log(data);
      }
    });
  });

  return (
    <div className="instagram-post">
      {feedData && (
        <Fragment>
          <div className="title-part" data-aos="fade-down">
            <div className="name">{"Instagram Post"}</div>
            {quickLinkDatas
              ?.filter((data) =>
                data?.title !== null
                  ? data?.title?.toLowerCase() === "instagram"
                  : null
              )
              .map((data, idx) => (
                <Link to={data.link} target="blank" key={idx}>
                  <h5>
                    <i className="fab fa-instagram"></i> @
                    {data.link.split("/")[3]}
                  </h5>
                </Link>
              ))}
          </div>
          <section>
            <div className="wrapper">
              <div className="instagram-post-list">
                {feedData
                  .filter((data) => findWord("nepalbirdwatching", data.caption))
                  .filter((data, idx) => idx < 9)
                  .map((item) => (
                    <Fragment>
                      {item?.media_type === "VIDEO" ? (
                        <div className="insta-item" key={item.id}>
                          <video muted autoPlay loop className="media-box">
                            <source src={item.media_url} alt={item.caption} />
                          </video>

                          <div className="content">
                            <HtmlToParagraphs
                              data={item.caption}
                              length={200}
                            />

                            <Link to={item.permalink} target="blank">
                              <button>
                                View Post <i className="fas fa-arrow-right"></i>
                              </button>
                            </Link>
                          </div>
                        </div>
                      ) : item?.media_type === "IMAGE" ? (
                        <div className="insta-item" key={item.id}>
                          <img
                            className="media-box"
                            src={item.media_url}
                            alt={item.caption}
                          />
                          <div className="content">
                            <HtmlToParagraphs
                              data={item.caption}
                              length={200}
                            />

                            <Link to={item.permalink} target="blank">
                              <button>
                                View Post <i className="fas fa-arrow-right"></i>
                              </button>
                            </Link>
                          </div>
                        </div>
                      ) : null}
                    </Fragment>
                  ))}
              </div>

              {feedData.length > 9
                ? quickLinkDatas
                    ?.filter((data) =>
                      data?.title !== null
                        ? data?.title?.toLowerCase() === "instagram"
                        : null
                    )
                    .map((data, idx) => (
                      <div className="view-all" key={idx}>
                        <Link to={data.link} target="blank">
                          <button>View all post</button>
                        </Link>
                      </div>
                    ))
                : null}
            </div>
          </section>
        </Fragment>
      )}
    </div>
  );
};

export default InstagramFeed;
