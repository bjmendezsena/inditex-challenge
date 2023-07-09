import type { RestRequest, RestContext, ResponseComposition } from "msw";
import { PodcastResponse, PodcastDetailsResponse } from "../../interfaces";
import podcastsJson from "../../dataset/podcasts.json";
import podcastDetails from "../../dataset/podcastDetails.json";

export const PodcastsHandler = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(
    ctx.status(200),
    ctx.json<PodcastResponse>(podcastsJson as PodcastResponse)
  );
};
export const PodcastDetailsHandler = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(
    ctx.status(200),
    ctx.json<PodcastDetailsResponse>(podcastDetails as PodcastDetailsResponse)
  );
};
