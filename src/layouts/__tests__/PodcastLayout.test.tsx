import { createMemoryHistory } from "history";
import { render } from "../../test-utils";
import { PodcastLayout } from "../PodcastLayout";

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
});
