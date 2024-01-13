import { QuestionResponse } from "@/hooks/GET/useFormClientData";

export type TClientQuestion = {
  handleValue: (value: string | number) => void;
  answerValue?: string | number | string[];
} & QuestionResponse;

export type TQuestionComponent = TClientQuestion & {
  questionNumber: number;
};
