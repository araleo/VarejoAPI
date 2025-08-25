import { Product } from "../models/Product";
import { ProductRepository } from "../repositories/product-repository";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async createProduct(product: Product): Promise<Product | null> {
    return await this.productRepository.insertProduct(product);
  }

  public async getProducts(): Promise<Product[]> {
    return await this.productRepository.findProducts();
  }

  public async getProductById(id: string): Promise<Product | null> {
    return await this.productRepository.findProductById(id);
  }

  public async getProductByName(name: string): Promise<Product[]> {
    return await this.productRepository.findProductByName(name);
  }

  public async updateProduct(
    id: string,
    product: Product,
  ): Promise<Product | null> {
    return await this.productRepository.updateProduct(id, product);
  }

  public async deleteProduct(id: string): Promise<Product | null> {
    return await this.productRepository.deleteProduct(id);
  }

  public async countProducts(): Promise<number> {
    return await this.productRepository.countProducts();
  }
}
