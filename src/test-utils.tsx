import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Router } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { RenderResult } from "@testing-library/react";
import { render as testingLibraryRender } from "@testing-library/react";
import React from "react";
import { theme } from "./theme";

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: true,
      cacheTime: 0,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    // ✅ no more errors on the console for tests
    error: process.env.NODE_ENV === "test" ? () => {} : console.error,
  },
});

export const queryWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
);

const DefaultTheme = extendTheme(theme);

const memoryHistory = createMemoryHistory();

interface RenderOptions {
  history?: MemoryHistory;
}

export const render = (
  ui: JSX.Element,
  { history: customHistory }: RenderOptions = {}
): RenderResult => {
  const history = customHistory || memoryHistory;
  const wrapper = ({ children }: { children?: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      <ChakraProvider theme={DefaultTheme}>
        <Router location={history.location} navigator={history}>
          {children}
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );

  return testingLibraryRender(ui, { wrapper });
};
