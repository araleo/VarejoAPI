import db from "./connection";

export const initializeDatabase = () => {
  console.log("Initializing database...");

  // Create products table based on the Product Zod model
  const createProductsTable = `
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL CHECK(length(name) >= 2 AND length(name) <= 100),
      description TEXT CHECK(description IS NULL OR length(description) <= 500),
      price REAL NOT NULL CHECK(price >= 0),
      category TEXT NOT NULL CHECK(length(category) >= 2 AND length(category) <= 100),
    )
  `;

  db.exec(createProductsTable);
  console.log("Products table created successfully");
};
