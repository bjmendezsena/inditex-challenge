import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { matchPath } from "react-router-dom";
import { render } from "../../test-utils";
import { PodcastLayout } from "../PodcastLayout";
import { RouterManager, RouteName } from "../../router";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    podcastId: "199",
  }),
  Navigate: () => <div>PodcastListPage</div>,
}));

describe(`<${PodcastLayout.name}/>`, () => {
  const history = createMemoryHistory();
  const factoryComponent = () =>
    render(<PodcastLayout />, {
      history,
    });

  it("should render without crashing", () => {
    const { container } = factoryComponent();
    expect(container).toMatchSnapshot();
  });

  it("Should navigate to the podcast details page when clicking on the podcast card", () => {
    factoryComponent();

    userEvent.click(screen.getByTestId("podcast-details-card"));
    expect(
      matchPath(
        RouterManager.getUrl(RouteName.PodcastDetails, {
          podcastId: "199",
        }),
        history.location.pathname
      )
    ).toBeTruthy();
  });

  it("Should navigate to the podcast list page when no has podcastId", () => {
    jest.spyOn(require("react-router-dom"), "useParams").mockReturnValue({
      podcastId: undefined,
    });

    factoryComponent();

    expect(screen.getByText("PodcastListPage")).toBeInTheDocument();
  });
});
