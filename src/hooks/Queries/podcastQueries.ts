import { useQuery } from "@tanstack/react-query";
import { FetchPodcastListArgs, fetchPodcastList } from "../../services";

const PODCAST_LIST_KEY = "PODCAST_LIST_KEY";

export const usePodcastList = (
  args: FetchPodcastListArgs = {
    genre: 1310,
    limit: 100,
  }
) => {
  return useQuery([PODCAST_LIST_KEY, args], () => fetchPodcastList(args), {
    onError(error) {
      console.log(error);
    },
  });
};
