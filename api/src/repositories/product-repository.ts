import Database from "better-sqlite3";
import { Product, productSchema } from "../models/Product";

export class ProductRepository {
  constructor(private readonly db: Database.Database) {}

  private mapDatabaseToProduct(dbRow: any): Product {
    return productSchema.parse(dbRow);
  }

  public async insertProduct(product: Product): Promise<Product | null> {
    try {
      const stmt = this.db.prepare(`
        INSERT INTO products (id, name, description, price, category)
        VALUES (?, ?, ?, ?, ?)
      `);

      stmt.run(
        product.id,
        product.name,
        product.description || null,
        product.price,
        product.category,
      );

      return product;
    } catch (error) {
      console.error("Error inserting product:", error);
      return null;
    }
  }

  public async findProducts(): Promise<Product[]> {
    try {
      const stmt = this.db.prepare("SELECT * FROM products");
      const rows = stmt.all();
      return rows.map((row) => this.mapDatabaseToProduct(row));
    } catch (error) {
      console.error("Error finding products:", error);
      return [];
    }
  }

  public async findProductById(id: string): Promise<Product | null> {
    try {
      const stmt = this.db.prepare("SELECT * FROM products WHERE id = ?");
      const row = stmt.get(id);
      return row ? this.mapDatabaseToProduct(row) : null;
    } catch (error) {
      console.error("Error finding product by id:", error);
      return null;
    }
  }

  public async findProductByName(name: string): Promise<Product[]> {
    try {
      const stmt = this.db.prepare("SELECT * FROM products WHERE name = ?");
      const rows = stmt.all(name);
      return rows.map((row) => this.mapDatabaseToProduct(row));
    } catch (error) {
      console.error("Error finding products by name:", error);
      return [];
    }
  }

  public async updateProduct(
    id: string,
    product: Product,
  ): Promise<Product | null> {
    try {
      const stmt = this.db.prepare(`
        UPDATE products
        SET name = ?, description = ?, price = ?, category = ?
        WHERE id = ?
      `);

      const result = stmt.run(
        product.name,
        product.description || null,
        product.price,
        product.category,
        id,
      );

      if (result.changes === 0) {
        return null;
      }

      return await this.findProductById(id);
    } catch (error) {
      console.error("Error updating product:", error);
      return null;
    }
  }

  public async deleteProduct(id: string): Promise<Product | null> {
    try {
      const product = await this.findProductById(id);
      if (!product) {
        return null;
      }

      const stmt = this.db.prepare("DELETE FROM products WHERE id = ?");
      const result = stmt.run(id);

      return result.changes > 0 ? product : null;
    } catch (error) {
      console.error("Error deleting product:", error);
      return null;
    }
  }

  public async countProducts(): Promise<number> {
    try {
      const stmt = this.db.prepare("SELECT COUNT(*) as count FROM products");
      const result = stmt.get() as { count: number };
      return result.count;
    } catch (error) {
      console.error("Error counting products:", error);
      return 0;
    }
  }
}
