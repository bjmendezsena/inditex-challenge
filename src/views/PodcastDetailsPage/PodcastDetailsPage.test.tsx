import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { matchPath } from "react-router-dom";
import { render } from "../../test-utils";
import { RouterManager, RouteName } from "../../router";
import podcastDetailsJson from "../../dataset/podcastDetails.json";
import { PodcastDetailsPage } from "./PodcastDetailsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    podcastId: "199",
  }),
}));

describe(`<${PodcastDetailsPage.name}/>`, () => {
  const history = createMemoryHistory();
  const factoryComponent = () =>
    render(<PodcastDetailsPage />, {
      history,
    });

  it("should render without crashing", () => {
    const { container } = factoryComponent();
    expect(container).toMatchSnapshot();
  });

  it("Should navigate to episode details page when click on episode name", async () => {
    factoryComponent();
    const episode = podcastDetailsJson.results[1];
    userEvent.click(screen.getByTestId(`episode-${episode.trackId}`));
    expect(
      matchPath(
        RouterManager.getUrl(RouteName.EpisodeDetails, {
          podcastId: episode.collectionId,
          episodeId: episode.trackId,
        }),
        history.location.pathname
      )
    ).toBeTruthy();
  });
});
