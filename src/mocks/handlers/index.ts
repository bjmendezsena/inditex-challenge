import { rest, RestRequest, RestContext, ResponseComposition } from "msw";
import format from "format-util";
import { ApiUrls } from "../../services";
import { PodcastsHandler, PodcastDetailsHandler } from "./PodcastHandler";

export const Response200Handle = (
  _req: RestRequest,
  res: ResponseComposition,
  cxt: RestContext
) => res(cxt.status(200));

export const Response500Handle = (
  _req: RestRequest,
  res: ResponseComposition,
  cxt: RestContext
) => res(cxt.status(500));

export const handlers = (baseUrl: string) => [
  rest.get(
    format(`${baseUrl}${ApiUrls.getPodcasts}`, ":limit", ":genre"),
    PodcastsHandler
  ),
  rest.get(`${baseUrl}${ApiUrls.getPodcastById}`, PodcastDetailsHandler),
];