import app from "./app.js";
import { initGithubAuth } from "./auth/strategies/github.strategy.js";
import { initGoogleAuth } from "./auth/strategies/google.strategy.js";
import { connectMongo } from "./config/mongo.config.js";

initGithubAuth();
initGoogleAuth();

async function init() {
  await connectMongo();
  app.listen(8080, () => {
    console.log("server is running");
  });
}

init();
