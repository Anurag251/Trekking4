import { AllDataContext } from "../context/AllData.context";
import { useContext } from "react";
import BlogCardComponent from "../components/BlogCard.component";

const BlogPage = () => {
  const { blogDatas } = useContext(AllDataContext);

  return (
    <section className="other-page">
      <div className="wrapper">
        <div className="news-events">
          <div className="title">Latest Blog </div>

          <div className="list">
            {blogDatas &&
              blogDatas?.map((data, idx) => {
                return <BlogCardComponent key={idx} data={data} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
