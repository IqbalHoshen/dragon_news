import Marquee from "react-fast-marquee";
import { useFetch } from "../../hooks/useFetch";

const NewsArticle = () => {
  const { data, loading, error } = useFetch("/demo-data/news.json");
  const newsTitles = data?.map((item) => item.title) || [];

  return (
    <div className=" bg-base-100 gap-4 flex flex-row items-center ">
      <button
        className="btn btn-accent text-white rounded-xs
"
      >
        Latest
      </button>

      {loading ? (
        <div className="skeleton h-10 w-full rounded flex items-center pl-4">
          Loading news...
        </div>
      ) : (
        <Marquee pauseOnHover speed={60}>
          {newsTitles.map((title, idx) => (
            <p key={idx} className="mx-2">
              {title}
            </p>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default NewsArticle;
