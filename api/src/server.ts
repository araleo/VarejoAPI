import app from "./app";
import { initializeDatabase } from "./database/init";

const PORT = process.env.PORT || 3000;

initializeDatabase();

const server = app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});

export default server;
