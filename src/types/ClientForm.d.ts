import { QuestionResponse } from "@/hooks/GET/useFormClientData";

type AcceptedValues = string | number | string[] | number[];

export type TClientQuestion = {
  handleValue: (value: AcceptedValues) => void;
  answerValue?: AcceptedValues;
} & QuestionResponse;

export type TQuestionComponent = TClientQuestion & {
  questionNumber: number;
};
