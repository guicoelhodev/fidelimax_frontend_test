import { Meta, StoryObj } from "@storybook/react";
import { SelectQuestion } from ".";
import { TClientQuestion } from "@/types/ClientForm";

type TMeta = Meta<typeof SelectQuestion>;
type TStory = StoryObj<TMeta>;

const mockContent: TClientQuestion = {
  content: "Texto mockado de exemplo",
  typeQuestion: 4,
  handleValue: () => {},
  answerValue: "",
  mandatory: false,
  horizontal: true,
  itens: [],
};

const meta = {
  title: "UI/components/SelectQuestion",
  component: SelectQuestion,
  tags: ["autodocs"],
  args: mockContent,
} satisfies TMeta;

export default meta;

export const Primary: TStory = {};
