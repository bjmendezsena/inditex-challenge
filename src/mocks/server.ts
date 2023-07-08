import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers(process.env.REACT_APP_API_URL!));
