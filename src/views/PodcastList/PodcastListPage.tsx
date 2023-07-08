import { Container } from "@chakra-ui/react";
import { Text } from "../../components";
import { usePodcastList } from "../../hooks";
import { PodcastList } from "../../components";

export const PodcastListPage = () => {
  const { data, isLoading } = usePodcastList();
  console.log(data);

  return (
    <Container maxW='container.xl' pt={20} bg='white'>
      <Text as='h1'>PodcastList</Text>
      <PodcastList isLoading={isLoading} source={data?.feed.entry} />
    </Container>
  );
};
