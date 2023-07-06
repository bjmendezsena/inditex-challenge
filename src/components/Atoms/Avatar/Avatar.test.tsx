import { render } from "../../../test-utils";
import { Avatar, type AvatarProps } from "./Avatar";

describe(`<${Avatar.name} />`, () => {
  const name = "John Doe";
  const src = "https://placekitten.com/200/200";
  const size2xs = { size: "2xs" };
  const sizeXs = { size: "xs" };
  const sizeSm = { size: "sm" };
  const sizeMd = { size: "md" };
  const sizeLg = { size: "lg" };
  const sizeXl = { size: "xl" };
  const size2Xl = { size: "2xl" };
  const size3Xl = { size: "3xl" };
  const factoryComponent = (props: AvatarProps) =>
    render(<Avatar {...props} />);

  test("renders correctly", () => {
    const view = factoryComponent({});
    expect(view.asFragment()).toMatchSnapshot();
  });

  test("renders correctly with size 2xs", () => {
    const view = factoryComponent(size2xs);
    expect(view.asFragment()).toMatchSnapshot("Using size 2xs");
  });
  test("renders correctly with size xs", () => {
    const view = factoryComponent(sizeXs);
    expect(view.asFragment()).toMatchSnapshot("Using size xs");
  });
  test("renders correctly with size sm", () => {
    const view = factoryComponent(sizeSm);
    expect(view.asFragment()).toMatchSnapshot("Using size sm");
  });
  test("renders correctly with size md", () => {
    const view = factoryComponent(sizeMd);
    expect(view.asFragment()).toMatchSnapshot("Using size md");
  });
  test("renders correctly with size lg", () => {
    const view = factoryComponent(sizeLg);
    expect(view.asFragment()).toMatchSnapshot("Using size lg");
  });
  test("renders correctly with size xl", () => {
    const view = factoryComponent(sizeXl);
    expect(view.asFragment()).toMatchSnapshot("Using size xl");
  });

  test("renders correctly with size 2xl", () => {
    const view = factoryComponent(size2Xl);
    expect(view.asFragment()).toMatchSnapshot("Using size 2xl");
  });

  test("renders correctly with size 3xl", () => {
    const view = factoryComponent(size3Xl);
    expect(view.asFragment()).toMatchSnapshot("Using size 3xl");
  });

  test("renders correctly with initials", () => {
    const view = factoryComponent({ name });
    expect(view.asFragment()).toMatchSnapshot("Using initials");
  });

  test("renders correctly with image", () => {
    const view = factoryComponent({ src });
    expect(view.asFragment()).toMatchSnapshot("Using image");
  });


  test("renders correctly with isLoading", () => {
    const view = factoryComponent({ isLoading: true });
    expect(view.asFragment()).toMatchSnapshot("Using isLoading");
  });
});
