import { describe, it, expect } from "vitest";
import { TextQuestion } from ".";
import { mockContent } from "./mock/contentMock";
import { TClientQuestion } from "@/types/ClientForm";
import { FC, useState } from "react";
import userEvent from "@testing-library/user-event";
import { render, waitFor } from "@testing-library/react";

const Wrapper: FC<TClientQuestion> = (props) => {
  const [text, setText] = useState(props.answerValue);
  return (
    <TextQuestion
      {...props}
      handleValue={(value) => setText(value)}
      answerValue={text}
    />
  );
};

describe("TextQuestion test component", () => {
  it("Should render correctly", () => {
    const screen = render(<Wrapper {...mockContent} />);
    expect(screen.container).toBeInTheDocument();
  });

  it("Should return text correctly when user type on textarea", async () => {
    const screen = render(<Wrapper {...mockContent} />);

    const textArea = screen.getByRole("textbox") as HTMLTextAreaElement;
    userEvent.type(textArea, "New text typed");

    await waitFor(() => {
      expect(textArea).toHaveValue("New text typed");
    });
  });

  it("Should return `(opicional)` text when the question is not mandatory", async () => {
    const screen = render(<Wrapper {...mockContent} mandatory={false} />);

    const spanText = screen.getByText("(opcional)");
    expect(spanText).toBeInTheDocument();
  });

  it("Should not return `(opicional)` text when the question is not mandatory", async () => {
    const screen = render(<Wrapper {...mockContent} mandatory />);

    const spanText = screen.queryByText("(opcional)");
    expect(spanText).toBeNull();
  });
});
