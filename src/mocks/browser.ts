import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers(process.env.REACT_APP_API_URL!));
