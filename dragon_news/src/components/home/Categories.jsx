import { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/demo-data/categories.json").then((res) =>
  res.json()
);

const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div>
      <h1>All Caterogy {categories.length}</h1>
      <div className="grid grid-cols-1 mt-2">
        {categories.map((categorie) => (
          <NavLink
            className={"btn bg-white border-0 hover:bg-base-300"}
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
