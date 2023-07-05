import React from "react";
import { useParams } from "react-router-dom";

export const PodcastDetails = () => {
  const { podcastId } = useParams<{ podcastId: string }>();
  return <div>
    <h1>Podcast Details</h1>
    <p>Podcast ID: {podcastId}</p>
  </div>;
};
