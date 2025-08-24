import Database from "better-sqlite3";
import { Product } from "../models/Product";

export class ProductRepository {
  constructor(private readonly db: Database.Database) {}

  public async insertProduct(_product: Product): Promise<Product | null> {
    // TODO: Implement database logic using this.db
    return null;
  }

  public async findProducts(): Promise<Product[]> {
    // TODO: Implement database logic using this.db
    return [];
  }

  public async findProductById(_id: string): Promise<Product | null> {
    // TODO: Implement database logic using this.db
    return null;
  }

  public async findProductByName(_name: string): Promise<Product | null> {
    // TODO: Implement database logic using this.db
    return null;
  }

  public async updateProduct(
    _id: string,
    _product: Product,
  ): Promise<Product | null> {
    // TODO: Implement database logic using this.db
    return null;
  }

  public async deleteProduct(_id: string): Promise<Product | null> {
    // TODO: Implement database logic using this.db
    return null;
  }

  public async countProducts(): Promise<number> {
    // TODO: Implement database logic using this.db
    return 0;
  }
}
