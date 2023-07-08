import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { theme } from "./theme";
import Router from "./router";
import { CACHE_TIME } from "./constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: CACHE_TIME,
      refetchOnWindowFocus: false,
    },
  },
});

const localStoragePersister = createSyncStoragePersister({
  storage: localStorage,
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
