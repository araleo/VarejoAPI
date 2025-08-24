import { Router } from "express";
import {
  handleCountProducts,
  handleCreateProduct,
  handleDeleteProduct,
  handleGetProductById,
  handleGetProductByName,
  handleGetProducts,
  handleUpdateProduct,
} from "../controllers/product-controller";

export const productRouter = Router();

productRouter.post("/", handleCreateProduct);

productRouter.get("/", handleGetProducts);

productRouter.get("/:id", handleGetProductById);

productRouter.get("/name/:name", handleGetProductByName);

productRouter.put("/:id", handleUpdateProduct);

productRouter.delete("/:id", handleDeleteProduct);

productRouter.get("/count", handleCountProducts);
