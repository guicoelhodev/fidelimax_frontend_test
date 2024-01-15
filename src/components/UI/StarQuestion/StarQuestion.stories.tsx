import { TQuestionComponent } from "@/types/ClientForm";
import { StarQuestion } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { FC } from "react";
import { mockContent } from "./mock";

type TWrapper = TQuestionComponent & {
  docText: string;
};

const Wrapper: FC<TWrapper> = (props) => {
  return (
    <section className="flex flex-col gap-4 max-w-xl">
      <p className="text-blue-600">{props.docText}</p>
      <StarQuestion {...props} />
    </section>
  );
};

const meta = {
  title: "UI/components/StarQuestion",
  component: Wrapper,
  tags: ["autodocs"],
  args: mockContent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Wrapper>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Primary: TStory = {
  name: "Default case",
  args: {
    answerValue: 2,
    docText: "Nesse exemplo, reproduz o comportamento padrão do componente",
  },
};

export const Secondary: TStory = {
  name: "Error case",
  args: {
    answerValue: 0,
    docText: "Nesse exemplo, reproduz o comportamento de erro do componente",
    mandatory: true,
  },
};
