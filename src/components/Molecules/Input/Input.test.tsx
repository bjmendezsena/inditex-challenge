import { render } from "../../../test-utils";
import type { InputProps } from "./Input";
import { Input } from "./Input";

describe(`<Input />`, () => {
  const id = "test-input";
  const label = "label";
  const placeholder = "placeholder";
  const defaultProps = {
    id,
    label,
    placeholder,
  };

  const isDisabled = { isDisabled: true };

  const factoryComponent = (props: InputProps = defaultProps) =>
    render(<Input {...props} />);

  test("renders correctly", () => {
    const view = factoryComponent();
    expect(view.asFragment()).toMatchSnapshot();
  });


  test("shows correctly when is disabled", () => {
    const view = factoryComponent({ ...defaultProps, ...isDisabled });
    expect(view.asFragment()).toMatchSnapshot("Using as disabled");
  });
});
