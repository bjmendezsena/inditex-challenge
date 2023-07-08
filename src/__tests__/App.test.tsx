import { render } from "@testing-library/react";
import App from "../App";

describe(`<${App.name}/>`, () => {
  it("should render without crash", () => {
    apiMocks.getPodcast("ok");
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
