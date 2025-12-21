import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, rating, total_view, author, thumbnail_url, details } =
    news;

  return (
    <div className="card shadow-md rounded-xl overflow-hidden mb-5">
      <div className="bg-base-100 flex justify-between items-center p-4 mb-5">
        <div className="flex items-center gap-3 ">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <CiBookmark size={24} />
          <IoShareSocialOutline size={24} />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-xl font-bold leading-snug hover:text-primary cursor-pointer mb-2">
        {title}
      </h2>

      {/* Image */}
      <figure className="px-4 pt-3 mb-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full  object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-[16px] font-normal ">
        <p className=" text-[#706F6F] line-clamp-3">{details}</p>

        <Link
          to={`/news-details/${id}`}
          className="mt-2 font-semibold bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent"
        >
          Read More
        </Link>
        <div className="w-full border-t border-base-300 mt-3"></div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 text-lg font-medium text-primary">
        <div className="flex items-center gap-2">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar size={24} key={i} className="text-orange-400" />
          ))}
          <span className=" ml-1">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 ">
          <FaEye size={24} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
