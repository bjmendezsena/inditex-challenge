import { screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../test-utils";
import podcastsJson from "../../dataset/podcasts.json";
import { PodcastListPage } from "./PodcastListPage";

describe(`<${PodcastListPage.name}/>`, () => {
  const factoryComponent = () => render(<PodcastListPage />);

  it("should render without crashing", () => {
    const { container } = factoryComponent();
    expect(container).toMatchSnapshot();
  });

  it("should render with 100 cards", () => {
    factoryComponent();
    expect(screen.getAllByTestId("card-content").length).toBe(
      podcastsJson.feed.entry.length
    );
  });

  it("Should filter podcasts", async () => {
    factoryComponent();
    const entry = podcastsJson.feed.entry[0];

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.type(screen.getByRole("textbox"), entry.title.label);
    });

    expect(screen.getAllByTestId("card-content").length).toBe(1);
  });
});
