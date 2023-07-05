export enum RouteName {
  PodcastList = "PodcastList",
  PodcastDetails = "PodcastDetails",
  EpisodeDetails = "EpisodeDetails",
}

export type RouteKey = keyof typeof RouteName;
