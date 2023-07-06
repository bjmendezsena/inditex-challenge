import React from "react";
import { useParams } from "react-router-dom";
import { Text } from "../../components";

export const PodcastDetails = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  return (
    <div>
      <Text as={"h1"}>Podcast Details</Text>
      <Text as={"p"}>Podcast ID: {podcastId}</Text>
    </div>
  );
};
