import { fidelimaxAPI } from '@/service/http';
import { useQuery } from '@tanstack/react-query';

export interface Response {
  itens: QuestionResponse[];
  error: string;
  warning: string;
}


export interface QuestionResponse {
  typeQuestion: number;
  answerValue?: number | string;
  mandatory: boolean;
  content: string;
  itens?: Iten[];
  horizontal?: boolean;
}

export interface Iten {
  value: number;
  description: string;
};

interface QueryParams {
  initialData: Response;
};

export const fidelimaxFormClientData = async () => {
  try {
    const response = await fidelimaxAPI.get<Response>('/front-test-survey.json');
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong, please try again later'); 
  }
};

export const useFormClientData = (props: QueryParams) => {
  return useQuery({
    queryKey: ['GET_formClientData'],
    queryFn: fidelimaxFormClientData,
    initialData: props.initialData
  });
}