import { Outlet } from "react-router-dom";
import React from "react";

export const PodcastLayout = () => {
  return (
    <div>
      <h1>Podcast Layout</h1>
      <Outlet />
    </div>
  );
};
