import { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/demo-data/categories.json").then((res) =>
  res.json()
);

const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div>
      <h1>All Caterogy </h1>
      <div className="grid grid-cols-1 mt-2 gap-2 ">
        {categories.map((categorie) => (
          <NavLink
            className={
              "btn bg-white border-0 shadow-none hover:bg-base-300 font-semibold text-primary"
            }
            key={categorie.id}
            to={`/categorie/${categorie.id}`}
          >
            {categorie.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
