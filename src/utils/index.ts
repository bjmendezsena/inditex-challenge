import { PodcastInfo } from "../components";
import { Entry } from "../interfaces";

export const mapEntryToInfo = (entry: Entry): PodcastInfo => ({
  id: entry.id.attributes["im:id"],
  name: entry["im:name"].label,
  image: entry["im:image"][2].label,
  title: entry.title.label,
  description: `Author: ${entry["im:artist"].label}`,
  summary: entry.summary.label,
});
