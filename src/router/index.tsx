import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./Routes";

export const router = createBrowserRouter(routes);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
