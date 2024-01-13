import { TMultipleChoiceQuestion } from "..";

export const mockContent: TMultipleChoiceQuestion = {
  content: "Texto mockado de exemplo",
  handleValue: () => {},
  mandatory: true,
  questionNumber: 53,
  answerValue: [],
  typeQuestion: 6,
  horizontal: true,
  itens: [
    { description: "Opção 1", value: 1 },
    { description: "Opção 2", value: 2 },
    { description: "Opção 3", value: 3 },
  ],
};
