import { useMemo, Children } from "react";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { Card } from "../../Molecules";
import { RouterManager } from "../../../router";
import { Entry } from "../../../interfaces";

export interface PodcastListProps {
  isLoading?: boolean;
  source?: Entry[];
}

export const PodcastList = ({ isLoading, source }: PodcastListProps) => {
  const data: Entry[] = useMemo(
    () => (isLoading ? Array.from({ length: 10 }) : source || []),
    [isLoading, source]
  );
  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 2,
        md: 4,
      }}
      overflowY='auto'
      maxH='550px'
    >
      {Children.toArray(
        data.map((item) => (
          <GridItem>
            <Card
              isLoading={isLoading}
              onClick={() => {
                RouterManager.to({
                  name: "EpisodeDetails",
                  params: { podcastId: "1", episodeId: "21" },
                });
              }}
              img={item["im:image"][2].label}
              title={item.title.label}
              description={`Author: ${item["im:artist"].label}`}
            />
          </GridItem>
        ))
      )}
    </SimpleGrid>
  );
};
