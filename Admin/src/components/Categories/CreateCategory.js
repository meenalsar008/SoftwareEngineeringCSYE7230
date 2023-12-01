import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "../LoadingError/Toast";
import { createCategory } from "../../services/categoryService";

const CreateCategory = ({onAddCategory}) => {
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
  });
  const onCategorySubmit = async (e) => {
    e.preventDefault();    
    try {
      const data = await createCategory(categoryForm)
      toast.success("Category created successfully")
      onAddCategory(data)
      setCategoryForm({name:"", description:""})      
    } catch (e) {
      toast.error("Something went wrong")
      console.log(e);
    }
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setCategoryForm({ ...categoryForm, [name]: value });
  };
  return (
    <div className="col-md-12 col-lg-4">
    <Toast/>
      <form onSubmit={onCategorySubmit}>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            name="name"
            value={categoryForm.name}
            onChange={(e) => onChange(e)}
          />
        </div>
        {/* <div className="mb-4">
          <label className="form-label">Images</label>
          <input className="form-control" type="file" />
        </div> */}
        <div className="mb-4">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            placeholder="Type here"
            className="form-control"
            rows="4"
            value={categoryForm.description}
            onChange={onChange}
          ></textarea>
        </div>

        <div className="d-grid" type="submit">
          <button className="btn btn-primary py-3">Create category</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
