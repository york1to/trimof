import type { DefaultTheme } from "vitepress";
import { API_KEY as apiKey, APP_ID as appId, INDEX_NAME as indexName } from "./info";

const algoliaConfig: DefaultTheme.AlgoliaSearchOptions = {
  apiKey,
  appId,
  indexName,
  translations: {
    button: {
      buttonAriaLabel: "Search",
      buttonText: "Search"
    },
    modal: {
      errorScreen: {
        helpText: "You may have to check your internet connection",
        titleText: "No result"
      },
      footer: {
        closeText: "Close",
        navigateText: "Swap",
        searchByText: "powered by",
        selectText: "Choose"
      },
      noResultsScreen: {
        noResultsText: "No relative result",
        reportMissingResultsLinkText: "Feedback",
        reportMissingResultsText: "You think result exists?",
        suggestedQueryText: "You can try searching"
      },
      searchBox: {
        cancelButtonAriaLabel: "Cancel",
        cancelButtonText: "Cancel",
        resetButtonAriaLabel: "Clean up labels",
        resetButtonTitle: "Clean up labels"
      },
      startScreen: {
        favoriteSearchesTitle: "Favorite",
        noRecentSearchesText: "No history",
        recentSearchesTitle: "Search history",
        removeFavoriteSearchButtonTitle: "Remove from favorite",
        removeRecentSearchButtonTitle: "Remove from search history",
        saveRecentSearchButtonTitle: "Save to search history"
      }
    }
  }
};

export default algoliaConfig;
