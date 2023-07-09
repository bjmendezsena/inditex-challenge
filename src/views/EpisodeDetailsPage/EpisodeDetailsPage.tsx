import { useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Heading,
  VStack,
  Container,
  Flex,
} from "@chakra-ui/react";
import { usePodcastDetails } from "../../hooks";
import { Result } from "../../interfaces";

export const EpisodeDetailsPage = () => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();

  const { data } = usePodcastDetails(podcastId);

  const episode: Result | undefined = useMemo(() => {
    return data?.results.find((result) => result.trackId === Number(episodeId));
  }, [data, episodeId]);
  console.log({ episode });

  return (
    <Container>
      <Card
        sx={{
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <CardBody>
          <VStack>
            <Heading>{episode?.collectionName}</Heading>
            <Flex
              dangerouslySetInnerHTML={{ __html: episode?.description || "" }}
            />
            <audio controls>
              <source
                src={episode?.episodeUrl}
                type={`${episode?.episodeContentType}/${episode?.episodeFileExtension}`}
              />
            </audio>
          </VStack>
        </CardBody>
      </Card>
    </Container>
  );
};
