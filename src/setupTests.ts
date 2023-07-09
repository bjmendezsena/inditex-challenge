import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { ApiMocksDirector } from "./mocks/ApiMocksDirector";

// Mocking API
beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

// @ts-ignore
global.apiMocks = new ApiMocksDirector(
  // @ts-ignore
  server,
  process.env.REACT_APP_API_URL!
);
