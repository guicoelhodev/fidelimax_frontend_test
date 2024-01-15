import { Meta, StoryObj } from "@storybook/react";
import { RadioGroupQuestion } from ".";
import { mockContent } from "./mock";
import { FC, useState } from "react";
import { TQuestionComponent } from "@/types/ClientForm";

type TWrapper = TQuestionComponent & {
  docText: string;
};
const Wrapper: FC<TWrapper> = (props) => {
  const [radioValue, setRadioValue] = useState<string | number>(
    props.answerValue!
  );
  return (
    <section className="flex flex-col gap-4 max-w-xl">
      <p className="text-blue-600">{props.docText}</p>
      <RadioGroupQuestion
        {...props}
        answerValue={radioValue}
        handleValue={(newRadioValue) => setRadioValue(newRadioValue)}
      />
    </section>
  );
};
const meta = {
  title: "UI/components/RadioGroupQuestion",
  component: Wrapper,
  args: mockContent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Wrapper>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Primary: TStory = {
  name: "TypeQuestion 2 - Default",
  args: {
    docText:
      "Este componente é compartilhado entre dois tipos de questões, no caso a segunda e a quinta",
  },
};

export const Secondary: TStory = {
  name: "TypeQuestion 2 - Error",
  args: {
    docText:
      "Este caso reproduz caso a resposta seja 0 e o mandatory seja true",
    mandatory: true,
    answerValue: 0,
  },
};

export const Terciary: TStory = {
  name: "TypeQuestion 5",
  args: {
    docText: "Esse caso reproduz caso o tipo de questão seja 5",
    typeQuestion: 5,
    itens: [
      {
        value: 1,
        description: "Sim",
      },
      {
        value: 0,
        description: "Não",
      },
    ],
  },
};
