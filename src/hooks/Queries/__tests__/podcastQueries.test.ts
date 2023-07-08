import { act, renderHook, waitFor } from "@testing-library/react";
import podcastJson from "../../../dataset/podcasts.json";
import { queryWrapper } from "../../../test-utils";
import { usePodcastList } from "../podcastQueries";
import { HttpException } from "../../../exceptions";

describe("usePodcastList", () => {
  it("should return podcast list", async () => {
    const { result } = renderHook(() => usePodcastList(), {
      wrapper: queryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());

    expect(result.current.data).toEqual(podcastJson);
  });

  it("should return error", async () => {
    apiMocks.getPodcast("failed");
    const { result } = renderHook(() => usePodcastList(), {
      wrapper: queryWrapper,
    });

    await waitFor(() => expect(result.current.isError).toBeTruthy());

    expect(result.current.error).toEqual(new HttpException(400, "Bad request"));
  });
});
