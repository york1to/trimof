import type { DefaultTheme } from "vitepress";
import { API_KEY as apiKey, APP_ID as appId, INDEX_NAME as indexName } from "./info";

const algoliaConfig: DefaultTheme.AlgoliaSearchOptions = {
  apiKey,
  appId,
  indexName
};

export default algoliaConfig;
