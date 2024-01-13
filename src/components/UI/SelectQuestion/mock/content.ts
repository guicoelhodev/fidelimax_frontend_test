import { TQuestionComponent } from "@/types/ClientForm";

export const mockContent: TQuestionComponent = {
  content: "Texto mockado de exemplo",
  typeQuestion: 4,
  handleValue: () => {},
  answerValue: "",
  mandatory: false,
  horizontal: true,
  itens: [
    { value: 1, description: "Opção 1" },
    { value: 2, description: "Opção 2" },
    { value: 3, description: "Opção 3" },
  ],
  questionNumber: 3,
};
