import format from "format-util";
import { HttpManager } from "../api";
import { HttpException } from "../exceptions";
import { PodcastResponse } from "../interfaces/podcast";
import { ApiUrls } from "./ApiUrls";

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
      console.log(err);
      throw new HttpException(400, "Bad request");
    });
};
