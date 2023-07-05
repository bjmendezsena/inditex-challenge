import React from "react";
import { useParams } from "react-router-dom";

export const EpisodeDetails = () => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  return (
    <div>
      <h1>Episode Details</h1>
      <p>Podcast ID: {podcastId}</p>
      <p>Episode ID: {episodeId}</p>
    </div>
  );
};
