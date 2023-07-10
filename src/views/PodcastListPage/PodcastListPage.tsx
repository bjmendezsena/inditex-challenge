import { ChangeEvent, useMemo, useState, useDeferredValue } from "react";
import { Container, Tag, Flex, Skeleton, HStack } from "@chakra-ui/react";
import { usePodcastList } from "../../hooks";
import { PodcastList, Input, type PodcastInfo } from "../../components";
import { mapEntryToInfo } from "../../utils";

export const PodcastListPage = () => {
  const { data, isLoading } = usePodcastList();

  const [filterValue, setFilterValue] = useState<string>("");

  const deferredFilterValue = useDeferredValue(filterValue);

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
          item.name.toLowerCase().includes(deferredFilterValue.toLowerCase()) ||
          item.title.toLowerCase().includes(deferredFilterValue.toLowerCase())
      );
  }, [data?.feed.entry, deferredFilterValue]);

  const isStale = useMemo(() => {
    return deferredFilterValue !== filterValue;
  }, [deferredFilterValue, filterValue]);

  return (
    <Container maxW='container.xl' pt={20} bg='white' overflow='auto'>
      <Flex w='100%' justifyContent='end'>
        <HStack alignItems='center'>
          {isLoading || isStale ? (
            <Skeleton height={6} w={10} borderRadius={5} />
          ) : (
            <Tag
              sx={{
                backgroundColor: "primary",
                height: "10px",
                color: "white",
              }}
            >
              {source.length}
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
      <PodcastList isLoading={isLoading || isStale} source={source} />
    </Container>
  );
};
