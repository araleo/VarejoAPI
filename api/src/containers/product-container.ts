import db from "../database/connection";
import { ProductRepository } from "../repositories/product-repository";
import { ProductService } from "../services/product-service";

/*
Container for product-related dependencies.
*/

const productRepository = new ProductRepository(db);

const productService = new ProductService(productRepository);

export { productRepository, productService };
