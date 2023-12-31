import { RouteObject, Navigate } from "react-router-dom";
import * as Views from "../views";
import { MainLayout, PodcastLayout } from "../layouts";
import { RoutePath } from "./RouterManager";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: RoutePath.PodcastList,
        element: <Views.PodcastListPage />,
      },
      {
        element: <PodcastLayout />,
        children: [
          {
            path: RoutePath.PodcastDetails,
            element: <Views.PodcastDetailsPage />,
          },
          {
            path: RoutePath.EpisodeDetails,
            element: <Views.EpisodeDetailsPage />,
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to={RoutePath.PodcastList} replace />,
      },
    ],
  },
];

export default routes;
