import type { ApiMocksDirector } from "./src/mocks/ApiMocksDirector";

declare global {
  const apiMocks: ApiMocksDirector;

  interface Window {
    apiMocks: ApiMocksDirector;
  }
}
