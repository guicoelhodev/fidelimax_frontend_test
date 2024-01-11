import { fetchWrapper } from '@/utils/fetchWrapper';
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

  const response = await fetchWrapper<Response>('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json');
  return response
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