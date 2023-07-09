import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../../test-utils";
import podcastsJson from "../../../dataset/podcasts.json";
import { RouterManager, RouteName } from "../../../router";
import { PodcastList, PodcastListProps } from "./PodcastList";
import { mapEntryToInfo } from "../../../utils";
import { Entry } from "../../../interfaces";

RouterManager.to = jest.fn();

const source = podcastsJson.feed.entry.map((item) =>
  mapEntryToInfo(item as Entry)
);

const defaultProps: PodcastListProps = {
  source,
  isLoading: false,
};

describe(`<${PodcastList.name}/>`, () => {
  const factoryComponent = (props?: Partial<PodcastListProps>) =>
    render(<PodcastList {...defaultProps} {...props} />);

  it("should render without crashing", () => {
    const { container } = factoryComponent();
    expect(container).toMatchSnapshot();
  });
  it("should render with loading", () => {
    const { container } = factoryComponent({
      isLoading: true,
    });
    expect(container).toMatchSnapshot("With loading");
  });

  it("Should navigate to podcast details page when click on podcast name", async () => {
    factoryComponent();
    const podcast = source[0];
    userEvent.click(screen.getByText(podcast.title));
    expect(RouterManager.to).toHaveBeenCalledWith(RouteName.PodcastDetails, {
      params: { podcastId: podcast.id },
      state: {
        summary: podcast.summary,
      },
    });
  });
});
