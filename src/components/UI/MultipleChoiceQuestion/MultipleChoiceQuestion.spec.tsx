import { useState } from "react";
import { describe, expect, it } from "vitest";
import { MultipleChoiceQuestion, TMultipleChoiceQuestion } from ".";
import { render } from "@testing-library/react";
import { mockContent } from "./mock/content";

const Wrapper = (props: TMultipleChoiceQuestion) => {
  const [optionsSelected, setOptions] = useState(props.answerValue);

  return (
    <MultipleChoiceQuestion
      {...props}
      handleValue={(value) => setOptions(value as unknown[])}
      answerValue={optionsSelected}
    />
  );
};

describe("Test MultipleChoiceQuestion component", () => {
  it("should render correctly", () => {
    const screen = render(<Wrapper {...mockContent} answerValue={[]} />);
    expect(screen.container).toBeInTheDocument();
  });

  it('Should render only buttons if "horizontal" is true', () => {
    const screen = render(
      <Wrapper {...mockContent} answerValue={[]} horizontal />
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(mockContent.itens!.length);
  });

  it('Should render only checkbox if "horizontal" is false', () => {
    const screen = render(
      <Wrapper {...mockContent} answerValue={[]} horizontal={false} />
    );

    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes).toHaveLength(mockContent.itens!.length);
  });
});
