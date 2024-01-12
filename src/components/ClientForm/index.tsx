"use client";

import { QuestionResponse, Response } from "@/hooks/GET/useFormClientData";
import { StarQuestion } from "@/components/UI/StarQuestion";
import { useCallback, useState } from "react";
import { RadioGroupQuestion } from "../UI/RadioGroupQuestion";

type TClientForm = {
  formPreviousData: Response | null;
};

type TQuestionTypes = 1 | 2 | 3 | 4 | 5 | 6;
type TFormValues = Record<TQuestionTypes, QuestionResponse>;

export const ClientForm: React.FC<TClientForm> = ({ formPreviousData }) => {
  const getDefaultFormValues: () => TFormValues = useCallback(() => {
    let tmpValues = {} as TFormValues;

    formPreviousData?.itens.forEach((question) => {
      tmpValues[question.typeQuestion as keyof typeof tmpValues] = question;
    });
    return tmpValues;
  }, [ formPreviousData?.itens ]);

  const [formValues, setFormValues] = useState<TFormValues>(getDefaultFormValues());


  const handleFormValues = (key: number, value: string | number) => {

    const currentKeyValues = formValues[key as TQuestionTypes];
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [key]: {
          ...currentKeyValues,
          answerValue: value,
        },
      };  
    })    
  };

  console.log(formValues)

  return (
    <div className="flex flex-col items-start">

      {Object.values(formValues).map((question) => {
        if (question.typeQuestion === 1) {
          return (
            <StarQuestion
              {...question}
              key={question.content}
              answerValue={question.answerValue}
              handleValue={(star) => handleFormValues(question.typeQuestion, star)}
            />
          );
        }

        if (question.typeQuestion === 2 || question.typeQuestion === 5) {
          return (
            <RadioGroupQuestion
              {...question}
              key={question.typeQuestion}
              handleValue={(value) => handleFormValues(question.typeQuestion, value)}
              answerValue={question.answerValue}
            />
          );
        }
      }
      )}
    </div>
  );
};
