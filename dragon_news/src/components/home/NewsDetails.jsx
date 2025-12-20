import Header from "../header/Header";
import NewsDatialsCard from "./NewsDatialsCard";
import RightAside from "./RightAside";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsItem = newsData.find((item) => item.id == id);
    setNews(newsItem);
  }, [newsData, id]);

  return (
    <div className="w-7xl mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className=" grid grid-cols-12 gap-4 mainTitle">
        <section className="col-span-9">
          <NewsDatialsCard news={news}></NewsDatialsCard>
        </section>
        <section className="col-span-3">
          <aside>
            <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
