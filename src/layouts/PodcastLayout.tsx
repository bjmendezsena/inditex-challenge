import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useParams, useLocation, Link } from "react-router-dom";
import { usePodcastDetails } from "../hooks";
import { RouterManager, RouteName } from "../router";
import { Text } from "../components";
import {
  Card,
  CardBody,
  Stack,
  StackDivider,
  Heading,
  GridItem,
  Grid,
  Image,
  Skeleton,
  SkeletonText,
  Flex,
} from "@chakra-ui/react";

const textProps = {
  fontWeight: "light",
  color: "gray.500",
  fontSize: "smaller",
  fontStyle: "italic",
};

export const PodcastLayout = () => {
  const { podcastId = "" } = useParams<{ podcastId: string }>();
  const { state } = useLocation();
  const { podcastInfo, isLoading } = usePodcastDetails(podcastId);
  const [description, setDescription] = useState<string | null>("");
  const summary = state?.summary;

  useEffect(() => {
    if (summary) {
      setDescription(summary);
    }
  }, [summary]);

  if (!podcastId) {
    return (
      <Navigate to={RouteName.PodcastList} replace />
    );
  }

  return (
    <Grid
      h='100vh'
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "30% 70%",
      }}
      mt={4}
      gap={4}
      p={4}
    >
      <GridItem>
        <Link
          to={RouterManager.getUrl(RouteName.PodcastDetails, {
            podcastId,
          })}
        >
          <Card
            data-testid='podcast-details-card'
            minW={{
              base: "100%",
              md: "400px",
            }}
            sx={{
              padding: "0 1rem",
            }}
          >
            <CardBody>
              <Stack
                direction='column'
                spacing={6}
                align='center'
                justify='center'
                divider={<StackDivider borderColor='gray.200' />}
              >
                <Skeleton h={200} w={200} isLoaded={!isLoading}>
                  <Image
                    src={podcastInfo.image}
                    alt={podcastInfo.title}
                    boxSize='200px'
                    objectFit='cover'
                  />
                </Skeleton>
                <Flex
                  sx={{
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  {isLoading ? (
                    <Skeleton h={5} w={200} />
                  ) : (
                    <Heading fontSize='md'>{podcastInfo.title}</Heading>
                  )}
                  {isLoading ? (
                    <Skeleton mt={2} h={3} w={100} />
                  ) : (
                    <Text {...textProps}>by {podcastInfo.author}</Text>
                  )}
                </Flex>
                <Flex
                  sx={{
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Heading fontSize='md'>Description</Heading>
                  {isLoading ? (
                    <SkeletonText mt={2} />
                  ) : (
                    <Text {...textProps}>{description}</Text>
                  )}
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </Link>
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
};
