import { Sequelize } from "sequelize";
import config from "../config";

const sequelize = new Sequelize(config.DATABASE_URL, {
  dialect: "postgres",
});

const connectToDatabase = async (retries = 5, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      return;
    } catch (error) {
      if (i < retries - 1) {
        console.log(
          `Database connection attempt ${i + 1}/${retries} failed. Retrying in ${delay}ms...`
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }
};

export { connectToDatabase, sequelize };
