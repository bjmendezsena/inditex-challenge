import { RouteName } from "./RouteName";

export const RoutePath: Record<RouteName, string> = {
  [RouteName.PodcastList]: "/",
  [RouteName.PodcastDetails]: "/podcast/:podcastId",
  [RouteName.EpisodeDetails]: "/podcast/:podcastId/episode/:episodeId",
};
