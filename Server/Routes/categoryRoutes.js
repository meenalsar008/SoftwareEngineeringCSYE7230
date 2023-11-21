import express from "express";
import asyncHandler from "express-async-handler";
import Category from "./../Models/CategoryModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const categoryRoute = express.Router();

// GET ALL CATEGORIES
categoryRoute.get(
  "/",
  asyncHandler(async (req, res) => {       
    const categories = await Category.find({}).sort({ _id: -1 });        
    res.json({ categories});
  })
);


// POST CATEGORIES
categoryRoute.post(
  "/",
//   protect,
  asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    try {
    const category = new Category({name, description});
    const createOrder = await category.save();
      res.status(201).json(createOrder);
    }    
    catch(e) {
        return res.status(400);
    }
})
);

// DELETE CATEGORY
categoryRoute.delete(
  "/:id",
//   protect,
//   admin,
  asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category) {
      await category.remove();
      res.json({ message: "Product deleted" });
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

// // CREATE PRODUCT
// productRoute.post(
//   "/",
//   protect,
//   admin,
//   asyncHandler(async (req, res) => {
//     const { name, price, description, image, countInStock } = req.body;
//     const productExist = await Product.findOne({ name });
//     if (productExist) {
//       res.status(400);
//       throw new Error("Product name already exist");
//     } else {
//       const product = new Product({
//         name,
//         price,
//         description,
//         image,
//         countInStock,
//         user: req.user._id,
//       });
//       if (product) {
//         const createdproduct = await product.save();
//         res.status(201).json(createdproduct);
//       } else {
//         res.status(400);
//         throw new Error("Invalid product data");
//       }
//     }
//   })
// );

// // UPDATE PRODUCT
// productRoute.put(
//   "/:id",
//   protect,
//   admin,
//   asyncHandler(async (req, res) => {
//     const { name, price, description, image, countInStock } = req.body;
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       product.name = name || product.name;
//       product.price = price || product.price;
//       product.description = description || product.description;
//       product.image = image || product.image;
//       product.countInStock = countInStock || product.countInStock;

//       const updatedProduct = await product.save();
//       res.json(updatedProduct);
//     } else {
//       res.status(404);
//       throw new Error("Product not found");
//     }
//   })
// );
export default categoryRoute;
