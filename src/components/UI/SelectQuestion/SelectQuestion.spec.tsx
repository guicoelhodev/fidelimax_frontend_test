import { describe, it, expect } from "vitest";
import { SelectQuestion } from ".";
import { AcceptedValues, TClientQuestion } from "@/types/ClientForm";
import { useState } from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { mockContent } from "./mock/content";

const Wrapper = (props: TClientQuestion) => {
  const [selectedValue, setSelectedValue] = useState(props.answerValue);

  return (
    <SelectQuestion
      questionNumber={5}
      {...props}
      handleValue={(value) => setSelectedValue(value as string)}
      answerValue={selectedValue as string}
    />
  );
};

describe("Test SelectQuestion component", () => {
  it("should render correctly", () => {
    const { container } = render(<Wrapper {...mockContent} />);
    expect(container).toBeInTheDocument();
  });

  it("Should return empty list if button is not clicked", async () => {
    const screen = render(<Wrapper {...mockContent} />);
    const list = screen.queryByTestId("selectList");

    expect(list).toBeNull();
  });

  it("Should open select after click on label", async () => {
    const screen = render(<Wrapper {...mockContent} />);

    const openSelect = screen.getByTestId("selectQuestion");

    const list = screen.queryByTestId("selectList");

    expect(list).toBeNull();
    fireEvent.click(openSelect);

    waitFor(() => {
      expect(list).toBeInTheDocument();
    });
  });

  it("Should select an option after click on it", async () => {
    const screen = render(<Wrapper {...mockContent} />);

    const buttons = screen.queryAllByRole("button");

    expect(buttons).toHaveLength(1);

    fireEvent.click(buttons[0]);

    const buttonsUpdated = await screen.findAllByRole(
      "button",
      {},
      { timeout: 2000 }
    );

    expect(buttonsUpdated).toHaveLength(4);

    fireEvent.click(buttonsUpdated[2]);

    const selectText = screen.queryByTestId("selectResult");

    expect(selectText?.textContent).toEqual(mockContent.itens![1].description);
  });
});
