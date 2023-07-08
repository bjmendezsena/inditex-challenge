import { render } from "@testing-library/react";
import App from "../App";

describe(`<${App.name}/>`, () => {
  it("should render without crash", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
