import { describe, it, expect, vi } from "vitest";
import { RadioGroupQuestion } from ".";
import { FC, useState } from "react";
import { TClientQuestion } from "@/types/ClientForm";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { mockContent } from "./mock";


const Wrapper: FC<TClientQuestion> = (props) => {
  const [radioValue, setRadioValue] = useState<string | number>(
    props.answerValue!
  );

  return (
    <RadioGroupQuestion
      {...props}
      answerValue={radioValue}
      handleValue={(newRadioValue) => setRadioValue(newRadioValue)}
    />
  );
};

  describe("when component  has typeQuestion equal 2", () => {
    it("Should render correctly", () => {
      const screen = render(<Wrapper {...mockContent} />);
      expect(screen.container).toBeInTheDocument();
    });

    it("Should return error, if the answer is equal to 0 and mandatory is true", () => {
      const screen = render(
        <Wrapper {...mockContent} answerValue={0} mandatory />
      );
      const errorMessage = screen.getByRole("error-message");

      expect(errorMessage).toBeInTheDocument();
    });

    it("Should not return error, if the answer is different to 0 and mandatory is true", () => {
      const screen = render(
        <Wrapper {...mockContent} answerValue={8} mandatory />
      );
      const errorMessage = screen.queryByRole("error-message");

      expect(errorMessage).toBeNull();
    });

    it("Should change value after click on radio button", async () => {
      const handleFn = vi.fn();
      const screen = render(
        <Wrapper {...mockContent} handleValue={handleFn} answerValue={2} />
      );

      const radioButtons = screen.queryAllByRole("radio") as HTMLInputElement[];
      const radio5 = radioButtons[4];

      expect(radio5.checked).toBe(false);

      waitFor(() => {
        fireEvent.click(radio5);
      });

      expect(radio5.checked).toBe(true);
    });
});
