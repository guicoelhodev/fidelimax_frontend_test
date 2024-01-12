import { StarQuestion } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/components/StarQuestion",
  component: StarQuestion,
  tags: ["autodocs"],
  args: {
    content: "Texto que será renderizado nessa pergunta",
    answerValue: 3,
    handleValue: (value) => console.log("O valor da resposta é:", value),
    horizontal: true,
    itens: [],
    mandatory: true,
    typeQuestion: 1,
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof StarQuestion>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Primary: TStory = {
  name: 'Default case',
  args: {
    answerValue: 2,
  },
  render: (args) => (
    <section className="flex flex-col gap-4">
      <p className="text-blue-600">
        Nesse exemplo, reproduz o comportamento padrão do componente
      </p>
      <StarQuestion {...args}  />
    </section>
  ),
};

export const Secondary: TStory = {
  name: "Error case",
  render: (args) => (
    <section className="max-w-lg flex flex-col gap-4">
      <p className="text-blue-600">
        Nesse exemplo de uso, deverá retornar uma mensagem de erro caso a chave mandatory estiver true e o valor da resposta for igual a zero
      </p>

      <StarQuestion {...args} answerValue={0} mandatory />
    </section>
  ),
};
