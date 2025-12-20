import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const NewsDatialsCard = ({ news }) => {
  const { category_id, thumbnail_url, title, details } = news;
  return (
    <div>
      <h1>Dragon News</h1>
      <div className="card  shadow-sm mt-4">
        <figure className="px-6 pt-8">
          <img src={thumbnail_url} alt="Image" className="rounded-sm w-full" />
        </figure>
        <div className="card-body">
          <h2 className=" text-[25px] font-bold text-base-200">{title}</h2>
          <p className="text-base font-normal text-primary">{details}</p>
          <div className="card-actions">
            <Link
              to={`/categorie/${category_id}`}
              className="btn btn-accent text-white rounded-xs"
            >
              <IoIosArrowRoundBack size={28} />
              All news in this category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDatialsCard;
