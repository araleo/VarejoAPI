import { RequestHandler } from "express";
import { productService } from "../containers/product-container";
import { productSchema } from "../models/Product";

export const handleCreateProduct: RequestHandler = async (req, res) => {
  const product = req.body;

  const parsedProduct = productSchema.safeParse(product);
  if (!parsedProduct.success) {
    return res.status(400).json({ error: parsedProduct.error });
  }

  const createdProduct = await productService.createProduct(parsedProduct.data);
  res.status(201).json(createdProduct);
};

export const handleGetProducts: RequestHandler = async (_, res) => {
  const products = await productService.getProducts();
  res.status(200).json(products);
};

export const handleGetProductById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Product ID is required" });
  }

  const product = await productService.getProductById(id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json(product);
};

export const handleGetProductByName: RequestHandler = async (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.status(400).json({ error: "Product name is required" });
  }

  const product = await productService.getProductByName(name);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json(product);
};

export const handleUpdateProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!id) {
    return res.status(400).json({ error: "Product ID is required" });
  }

  const parsedProduct = productSchema.safeParse(product);
  if (!parsedProduct.success) {
    return res.status(400).json({ error: parsedProduct.error });
  }

  const updatedProduct = await productService.updateProduct(
    id,
    parsedProduct.data,
  );
  if (!updatedProduct) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json(updatedProduct);
};

export const handleDeleteProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Product ID is required" });
  }

  const deleted = await productService.deleteProduct(id);
  if (!deleted) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(204).send();
};

export const handleCountProducts: RequestHandler = async (_, res) => {
  const count = await productService.countProducts();
  res.status(200).json({ count: count });
};
