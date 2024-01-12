import { Meta, StoryObj } from "@storybook/react";
import { RadioGroupQuestion } from ".";
import { mockContent } from "./mock";
import { FC, useState } from "react";
import { TClientQuestion } from "@/types/ClientForm";

type TWrapper = Omit<TClientQuestion, "handleValue">;
const Wrapper: FC<TWrapper> = (props) => {
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
const meta = {
  title: "UI/components/RadioGroupQuestion",
  component: RadioGroupQuestion,
  args: mockContent,
  tags: ["autodocs"],
  render: (args) => (
    <section className="flex flex-col gap-4 max-w-xl">
      <p className="text-blue-600">
        Este componente é compartilhado entre dois tipos de questões, no caso a
        segunda e a quinta
      </p>
      <Wrapper {...args} />
    </section>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RadioGroupQuestion>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Primary: TStory = {
  name: "TypeQuestion 2 - Default",
  args: { answerValue: 8 }
};

export const Secondary: TStory = {
  name: "TypeQuestion 2 - Error",
  args: {
    typeQuestion: 5,
  },
  render: (args) => (
    <section className="flex flex-col gap-4 max-w-xl">
      <p className="text-blue-600">
        Este caso reproduz caso a resposta seja 0 e o componente seja
        obrigatório
      </p>
      <RadioGroupQuestion
        {...args}
        typeQuestion={2}
        answerValue={0}
        mandatory={true}
      />
    </section>
  ),
};
