"use client";

import { QuestionResponse, Response } from "@/hooks/GET/useFormClientData";
import { StarQuestion } from "@/components/UI/StarQuestion";
import { useCallback, useState } from "react";
import { RadioGroupQuestion } from "../UI/RadioGroupQuestion";
import { TextQuestion } from "../UI/TextQuestion";

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

  return (
    <div className="max-w-xl m-auto flex flex-col gap-2 items-start p-4 border border-red-200">

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

        if(question.typeQuestion === 3) {
          return (
            <TextQuestion {...question} key={question.content} handleValue={(value) => handleFormValues(question.typeQuestion, value)} />
          )
        }
      })}
    </div>
  );
};
