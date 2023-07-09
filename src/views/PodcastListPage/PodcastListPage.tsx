import { ChangeEvent, useMemo, useState } from "react";
import { Container, Tag, Flex, Skeleton, HStack } from "@chakra-ui/react";
import { usePodcastList } from "../../hooks";
import { PodcastList, Input, type PodcastInfo } from "../../components";
import { mapEntryToInfo } from "../../utils";

export const PodcastListPage = () => {
  const { data, isLoading } = usePodcastList();

  const [filterValue, setFilterValue] = useState<string>("");

  const handleFilter = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFilterValue(value);
  };

  const source: PodcastInfo[] = useMemo(() => {
    if (!data?.feed.entry) return [];
    return data.feed.entry
      .map(mapEntryToInfo)
      .filter(
        (item) =>
          item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          item.title.toLowerCase().includes(filterValue.toLowerCase())
      );
  }, [data?.feed.entry, filterValue]);

  return (
    <Container maxW='container.xl' pt={20} bg='white' overflow='auto'>
      <Flex w='100%' justifyContent='end'>
        <HStack alignItems='center'>
          {isLoading ? (
            <Skeleton height={6} w={10} borderRadius={5} />
          ) : (
            <Tag
              sx={{
                backgroundColor: "primary",
                height: "10px",
                color: "white",
              }}
            >
              {data?.feed.entry.length}
            </Tag>
          )}
          <Input
            sx={{
              width: "300px",
              borderRadius: "5px",
              height: "30px",
            }}
            variant='outline'
            placeholder='Filter podcasts...'
            onChange={handleFilter}
          />
        </HStack>
      </Flex>
      <PodcastList isLoading={isLoading} source={source} />
    </Container>
  );
};
