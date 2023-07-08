import type { RestRequest, RestContext, ResponseComposition } from "msw";
import { PodcastResponse } from "../../interfaces";
import podcastsJson from "../../dataset/podcasts.json";

export const PodcastHandler = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(
    ctx.status(200),
    ctx.json<PodcastResponse>(podcastsJson as PodcastResponse)
  );
};
