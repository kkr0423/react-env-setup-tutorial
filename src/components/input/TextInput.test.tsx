import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./TextInput";

test("TextInput Component test", async () => {
  render(<TextInput />);

  const inputEle = screen.getByRole("textbox");
  expect(inputEle).toBeInTheDocument();
});

test("TextInput Event test", async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const inputEle = screen.getByRole("textbox");
  await user.type(inputEle, "Hello World");
  const pEle = screen.getByText(/hello world/i);
  expect(pEle).toBeInTheDocument();
});
