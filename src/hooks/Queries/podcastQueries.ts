import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  FetchPodcastListArgs,
  fetchPodcastList,
  FetchPodcastByIdArgs,
  fetchPodcastById,
} from "../../services";

const PODCAST_LIST_KEY = "PODCAST_LIST_KEY";
const PODCAST_DETAILS_KEY = "PODCAST_DETAILS_KEY";

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

export const usePodcastDetails = (
  id?: string,
  args: FetchPodcastByIdArgs = {
    media: "podcast",
    entity: "podcastEpisode",
    limit: 20,
  }
) => {
  const [podcastInfo, setPodcastInfo] = useState<{
    title: string;
    author: string;
    image: string;
    trackCount?: number;
  }>({
    title: "",
    author: "",
    image: "",
  });
  const query = useQuery(
    [PODCAST_DETAILS_KEY, id],
    () => fetchPodcastById(id!, args),
    {
      enabled: !!id,
      onError() {
        setPodcastInfo({
          title: "",
          author: "",
          image: "",
        });
      },
      onSuccess(data) {
        const [info] = data.results;
        setPodcastInfo({
          title: info?.collectionName,
          author: info?.artistName || "",
          image: info.artworkUrl600 || "",
          trackCount: info?.trackCount,
        });
      },
    }
  );

  return { ...query, podcastInfo };
};
