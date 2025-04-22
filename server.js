import app from "./app.js";
import { initAuthProviders } from "./auth/strategies/index.js";
import { connectMongo } from "./config/mongo.config.js";

initAuthProviders();
async function init() {
  await connectMongo();
  app.listen(8080, () => {
    console.log("server is running");
  });
}

init();
