import { screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { matchPath } from "react-router-dom";
import { render } from "../../test-utils";
import { MainLayout } from "../MainLayout";
import { RouterManager, RouteName } from "../../router";

describe(`<${MainLayout.name}/>`, () => {
  const history = createMemoryHistory();
  const factoryComponent = () =>
    render(<MainLayout />, {
      history,
    });

  it("should render without crashing", () => {
    const { container } = factoryComponent();
    expect(container).toMatchSnapshot();
  });

  it("Should navigate to home page when click on podcast link", () => {
    factoryComponent();
    const logo = screen.getByText("Podcaster");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
    logo.click();
    expect(
      matchPath(
        RouterManager.getUrl(RouteName.PodcastList),
        history.location.pathname
      )
    ).toBeTruthy();
  });
});
