import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

type TMeta = Meta<typeof Button>;
type TStory = StoryObj<TMeta>;

const meta = {
  title: "UI/components/Button",
  component: Button,
  args: {
    children: "Button example",
  },
} satisfies TMeta;

export default meta;

export const Primary: TStory = {};
