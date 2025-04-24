import { initGithubAuth } from "./github.strategy.js";
import { initGoogleAuth } from "./google.strategy.js";

export function initAuthProviders() {
  initGithubAuth();
  initGoogleAuth();
}
