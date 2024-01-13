import { Meta, StoryObj } from "@storybook/react";
import { SelectQuestion } from ".";
import { mockContent } from "./mock/content";

type TMeta = Meta<typeof SelectQuestion>;
type TStory = StoryObj<TMeta>;

const meta = {
  title: "UI/components/SelectQuestion",
  component: SelectQuestion,
  tags: ["autodocs"],
  args: mockContent,
} satisfies TMeta;

export default meta;

export const Primary: TStory = {};
