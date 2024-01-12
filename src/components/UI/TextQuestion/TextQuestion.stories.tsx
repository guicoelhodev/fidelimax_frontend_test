import { Meta, StoryObj } from "@storybook/react";
import { mockContent } from './mock/contentMock'
import { TClientQuestion } from '@/types/ClientForm'
import { TextQuestion } from ".";
import { useState } from "react";

type TStory = StoryObj<typeof TextQuestion>;

const Wrapper = (props: TClientQuestion) => {

  const [text, setText] = useState(props.answerValue);

  return (
    <TextQuestion 
      {...props}
      handleValue={(value) => setText(value)}
      answerValue={text}
    />
  )
};

const meta = {
  title: 'UI/components/TextQuestion',
  component: Wrapper,
  args: mockContent,
  tags: ['autodocs'],
} satisfies Meta<typeof Wrapper>;

export default meta;

export const Primary: TStory = {}
