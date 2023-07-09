import { useEffect, useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { useParams, Link as RRDLink } from "react-router-dom";
import { format } from "date-fns";
import {
  Card,
  Container,
  CardBody,
  Flex,
  Heading,
  Skeleton,
  Link,
} from "@chakra-ui/react";
import { Text, Table } from "../../components";
import { usePodcastDetails } from "../../hooks";
import { RouterManager, RouteName } from "../../router";
import { Result } from "../../interfaces/podcastDetails";

const DURATION_FORMAT = "mm:ss";
const DATE_FORMAT = "dd/MM/yyyy";

interface PodcastTableData {
  trackName: string;
  releaseDate: string;
  trackTimeMillis: number;
  collectionId: number;
  trackId: number;
  raw: Result;
}

const columnHelper = createColumnHelper<PodcastTableData>();

const columns = [
  columnHelper.accessor("trackName", {
    header: "Title",
    size: 400,
    cell: ({ getValue, row }) => {
      const { original } = row;
      console.log({ original });
      return (
        <Link
          data-testid={`episode-${original.trackId}`}
          as={RRDLink}
          to={RouterManager.getUrl(RouteName.EpisodeDetails, {
            podcastId: original.collectionId,
            episodeId: original.trackId,
          })}
          sx={{
            fontWeight: "regular",
          }}
        >
          {getValue()}
        </Link>
      );
    },
  }),
  columnHelper.accessor("releaseDate", {
    header: "Date",
    cell: ({ getValue }) => {
      return <Text>{format(new Date(getValue()), DATE_FORMAT)}</Text>;
    },
  }),
  columnHelper.accessor("trackTimeMillis", {
    header: "Duration",
    cell: ({ getValue }) => (
      <Text>{format(new Date(getValue()), DURATION_FORMAT)}</Text>
    ),
  }),
];

export const PodcastDetailsPage = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  useEffect(() => {
    !podcastId &&
      RouterManager.to(RouteName.PodcastList, {
        replace: true,
      });
  });

  const { data, podcastInfo, isLoading } = usePodcastDetails(podcastId);

  const sourceData: PodcastTableData[] = useMemo(() => {
    if (!data) return [];
    return data.results
      .filter((item) => !item.artistName)
      .map((item: Result) => ({
        trackName: item.trackName,
        releaseDate: item.releaseDate,
        trackTimeMillis: item.trackTimeMillis,
        collectionId: item.collectionId,
        trackId: item.trackId,
        raw: item,
      }));
  }, [data]);

  return (
    <Container maxW='container.md'>
      <Card
        sx={{
          width: "full",
          maxWidth: "container.md",
        }}
      >
        <CardBody
          sx={{
            minHeight: 0,
            height: "50px",
            pt: 2,
          }}
        >
          <Flex
            sx={{
              width: "full",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <Skeleton h={4} w={200} />
            ) : (
              <Heading>Episodes: {podcastInfo?.trackCount}</Heading>
            )}
          </Flex>
        </CardBody>
      </Card>
      <Card
        sx={{
          width: "full",
          maxWidth: "container.md",
        }}
      >
        <CardBody
          sx={{
            px: 4,
            display: "block",
            maxHeight: "500px",
          }}
        >
          <Table
            isLoading={isLoading}
            name='episode'
            columns={columns}
            data={sourceData}
          />
        </CardBody>
      </Card>
    </Container>
  );
};
