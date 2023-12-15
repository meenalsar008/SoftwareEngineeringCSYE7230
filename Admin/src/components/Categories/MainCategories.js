import React from "react";
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";
import { useState, useEffect } from "react";
import {
  deleteCategory,
  fetchAllCategories,
} from "../../services/categoryService";

const MainCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const getAllCategories = async () => {
    try {
      const data = await fetchAllCategories();
      setCategoriesData(data?.categories);
    } catch (e) {
      console.log(e);
    }
  };
  const onAddCategory = (categoryData) => {
    setCategoriesData([...categoriesData, categoryData]);
  };
  const onDeleteCategory = async (id) => {
    const data = await deleteCategory(id);
    console.log(data);
    if (data) {
      setCategoriesData(categoriesData.filter((item) => item._id !== id));
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categories</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* Create category */}
            <CreateCategory onAddCategory={onAddCategory} />
            {/* Categories table */}
            <CategoriesTable
              data={categoriesData}
              onDeleteCategory={onDeleteCategory}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
