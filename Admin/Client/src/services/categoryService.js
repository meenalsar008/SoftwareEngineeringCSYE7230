import axios from "axios";
export const fetchAllCategories = async () => {
  const response = await axios.get("/api/categories");
  return response?.data;
};

export const createCategory = async (categoryForm) => {
    const response = await axios.post("/api/categories", categoryForm);
    return response?.data;
}

export const deleteCategory = async (categoryId) => {
    const response = await axios.delete(`/api/categories/${categoryId}`);
    return response;
}