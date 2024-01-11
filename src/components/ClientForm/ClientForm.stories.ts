import type { Meta, StoryObj } from '@storybook/react';
import { ClientForm } from '.'

const meta = {
  title: '/components/ClientForm',
  component: ClientForm,
  tags: [
'autodocs'
  ],
  args: {
    formPreviousData: null
  }
} satisfies Meta<typeof ClientForm>

export default meta;

type TStory = StoryObj<typeof meta>

export const Primary : TStory = {}