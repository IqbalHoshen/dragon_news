import { Outlet } from "react-router";
import Header from "../header/Header";
import NewsArticle from "../header/newsArticle";
import Navbar from "../header/Navbar";
import LeftAside from "../home/LeftAside";
import RightAside from "../home/RightAside";

const HomeLayout = () => {
  return (
    <div className="w-7xl mx-auto">
      <header>
        <Header></Header>
        <NewsArticle></NewsArticle>
        <Navbar></Navbar>
      </header>

      <main className="grid grid-cols-12 gap-4 mainTitle">
        <section className="left_side col-span-3 ">
          <aside>
            <LeftAside></LeftAside>
          </aside>
        </section>
        <section className="main col-span-6 ">
          <Outlet></Outlet>
        </section>

        <section className="right_side col-span-3 ">
          <aside>
            <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
