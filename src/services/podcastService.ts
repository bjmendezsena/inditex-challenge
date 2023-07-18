import format from "format-util";
import { HttpManager } from "../api";
import { HttpException } from "../exceptions";
import { PodcastResponse, PodcastDetailsResponse } from "../interfaces";
import { ApiUrls } from "../api";

export type FetchPodcastListArgs = {
  limit?: number;
  genre?: number;
};
export const fetchPodcastList = async ({
  genre = 1310,
  limit = 100,
}: FetchPodcastListArgs = {}) => {
  return HttpManager.get<PodcastResponse>(
    format(ApiUrls.getPodcasts, limit, genre)
  )
    .then((resp) => resp.data)
    .catch((err) => {
      throw new HttpException(400, "Bad request");
    });
};

export type FetchPodcastByIdArgs = {
  media?: string;
  entity?: string;
  limit?: number;
};
export const fetchPodcastById = async (
  id: string,
  options: FetchPodcastByIdArgs = {}
) => {
  return HttpManager.get<PodcastDetailsResponse>(ApiUrls.getPodcastById, {
    id,
    ...options,
  })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err);
      throw new HttpException(400, "Bad request");
    });
};
