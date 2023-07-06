import { Wrap, WrapItem, Container, Box } from "@chakra-ui/react";
import { Text, Card } from "../../components";

export const PodcastList = () => {
  return (
    <Container maxW='container.xl' p={20}>
      <Text as='h1'>PodcastList</Text>
      <Wrap spacing={4} mt={20}>
        <WrapItem>
          <Card
            img='https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg'
            title='PodcastList title'
            description='PodcastList description'
          />
        </WrapItem>
        <WrapItem>
          <Card
            img='https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg'
            title='PodcastList title'
            description='PodcastList description'
          />
        </WrapItem>
        <WrapItem>
          <Card
            img='https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg'
            title='PodcastList title'
            description='PodcastList description'
          />
        </WrapItem>
        <WrapItem>
          <Card
            img='https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg'
            title='PodcastList title'
            description='PodcastList description'
          />
        </WrapItem>
        <WrapItem>
          <Card
            img='https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg'
            title='PodcastList title'
            description='PodcastList description'
          />
        </WrapItem>
        <WrapItem>
          <Card
            img='https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg'
            title='PodcastList title'
            description='PodcastList description'
          />
        </WrapItem>
        <WrapItem>
          <Card
            img='https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg'
            title='PodcastList title'
            description='PodcastList description'
          />
        </WrapItem>
      </Wrap>
    </Container>
  );
};
