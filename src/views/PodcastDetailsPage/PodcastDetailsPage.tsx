import { useEffect, useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import {
  Card,
  Container,
  CardBody,
  Flex,
  Heading,
  Skeleton,
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
}

const columnHelper = createColumnHelper<PodcastTableData>();

const columns = [
  columnHelper.accessor("trackName", {
    header: "Title",
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

export const PodcastDetails = () => {
  const { podcastId } = useParams<{ podcastId: string }>();

  useEffect(() => {
    !podcastId &&
      RouterManager.to(RouteName.PodcastList, {
        replace: true,
      });
  });

  const { data, podcastInfo, isLoading } = usePodcastDetails(podcastId);

  const sourceData = useMemo(() => {
    if (!data) return [];
    return data.results
      .filter((item) => !item.artistName)
      .map((item: Result) => ({
        trackName: item.trackName,
        releaseDate: item.releaseDate,
        trackTimeMillis: item.trackTimeMillis,
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
