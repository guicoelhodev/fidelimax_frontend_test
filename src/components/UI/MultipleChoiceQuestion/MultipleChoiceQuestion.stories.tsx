import { Meta, StoryObj } from "@storybook/react";
import { FC, useState } from "react";
import { TMultipleChoiceQuestion, MultipleChoiceQuestion } from ".";
import { mockContent } from "./mock/content";

type TWrapper = TMultipleChoiceQuestion & {
  docText: string;
};

type TStory = StoryObj<TWrapper>;

const Wrapper: FC<TWrapper> = (props) => {
  const [optionsSelected, setOptions] = useState(props.answerValue);

  return (
    <section className="flex flex-col gap-4">
      <p className="text-blue-600">{props.docText}</p>
      <MultipleChoiceQuestion
        {...props}
        handleValue={(value) => setOptions(value as unknown[])}
        answerValue={optionsSelected}
      />
    </section>
  );
};

const meta = {
  title: "UI/components/MultipleChoiceQuestion",
  component: Wrapper,
  tags: ["autodocs"],
  args: mockContent,
} satisfies Meta<typeof Wrapper>;

export default meta;

export const Primary: TStory = {
  args: {
    docText:
      "Esse componente possui dois comportamentos baseado na chave horizontal. ",
  },
};

export const Secondary: TStory = {
  name: "Button case",
  args: {
    docText:
      "Renderiza uma lista de botões caso a chave horizontal seja definida como true.",
    horizontal: true,
  },
};

export const Terciary: TStory = {
  name: "Checkbox case",
  args: {
    docText:
      "Renderiza uma lista de checkbox caso a chave horizontal seja definida como false.",
    horizontal: false,
  },
};
