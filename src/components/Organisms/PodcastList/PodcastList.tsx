import { useMemo, Children } from "react";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import { Card } from "../../Molecules";
import { RouteName, RouterManager } from "../../../router";

export type PodcastInfo = {
  id: string;
  name: string;
  image: string;
  title: string;
  description: string;
  summary: string;
};

export interface PodcastListProps {
  isLoading?: boolean;
  source?: PodcastInfo[];
}

export const PodcastList = ({ isLoading, source }: PodcastListProps) => {
  const data: PodcastInfo[] = useMemo(
    () => (isLoading ? Array(8).fill({}) : source || []),
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
      maxH='100%'
    >
      {Children.toArray(
        data.map(({ id, image, ...rest }) => (
          <GridItem>
            <Card
              isLoading={isLoading}
              onClick={() => {
                RouterManager.to(RouteName.PodcastDetails, {
                  params: { podcastId: id },
                  state: {
                    summary: rest.summary,
                  },
                });
              }}
              img={image}
              {...rest}
            />
          </GridItem>
        ))
      )}
    </SimpleGrid>
  );
};
