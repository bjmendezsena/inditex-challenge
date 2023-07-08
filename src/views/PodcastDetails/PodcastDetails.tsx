import React from "react";
import { useParams } from "react-router-dom";
import { Text } from "../../components";
import { fetchPodcastById } from "../../services";
import { usePodcastDetails } from "../../hooks";
import { RouterManager, RouteName } from "../../router";

export const PodcastDetails = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  React.useEffect(() => {
    !podcastId &&
      RouterManager.to(RouteName.PodcastList, {
        replace: true,
      });
  });

  const { data } = usePodcastDetails(podcastId);
  const artistName = React.useMemo(() => {
    if (!data) return "";
    const [info] = data.results;
    return info.artistName;
  }, [data]);

  return (
    <div>
      <Text as={"h1"}>Nombre:{artistName}</Text>
      <Text as={"p"}>Podcast ID: {podcastId}</Text>
    </div>
  );
};
