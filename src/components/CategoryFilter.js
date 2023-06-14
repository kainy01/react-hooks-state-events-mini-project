import React from "react";

function CategoryFilter({ categories,selectedCategory, onSelectCategory }) {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cate) => (
        <button
          key={cate}
          className={selectedCategory == cate ? "selected" : ""}
          onClick={() => handleCategoryClick(cate)}
        >
          {cate}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
