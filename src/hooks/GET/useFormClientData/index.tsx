import { fetchFideliMax } from "@/utils/fetchWrapper";
import { useQuery } from "@tanstack/react-query";

export type Response = {
  itens: QuestionResponse[];
  error: string;
  warning: string;
};

export type QuestionResponse = {
  typeQuestion: number;
  answerValue?: number | string;
  mandatory: boolean;
  content: string;
  itens?: Iten[];
  horizontal?: boolean;
};

export type Iten = {
  value: number;
  description: string;
};

type QueryParams = {
  initialData: Response | null;
};

export const fidelimaxFormClientData = async () => {
  try {
    const response = await fetchFideliMax<Response>("/front-test/survey.json");
    return response;
  } catch (error) {
    throw new Error("Something went wrong, please try again later");
  }
};

export const useFormClientData = (props: QueryParams) => {
  return useQuery({
    queryKey: ["GET_formClientData"],
    queryFn: fidelimaxFormClientData,
    initialData: props.initialData,
  });
};
