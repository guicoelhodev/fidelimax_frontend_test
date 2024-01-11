import { QuestionResponse } from '@/hooks/GET/useFormClientData'

export type TClientQuestion = {
  handleValue: (value: string | number) => void
} & QuestionResponse;