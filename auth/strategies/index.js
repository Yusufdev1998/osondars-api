import { initGithubAuth } from "./github.strategy";
import { initGoogleAuth } from "./google.strategy";

export function initAuthProviders() {
  initGithubAuth();
  initGoogleAuth();
}
