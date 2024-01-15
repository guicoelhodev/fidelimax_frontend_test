"use client";

import { QuestionResponse, Response } from "@/hooks/GET/useFormClientData";
import { StarQuestion } from "@/components/UI/StarQuestion";
import { useCallback, useState } from "react";
import { RadioGroupQuestion } from "../UI/RadioGroupQuestion";
import { TextQuestion } from "../UI/TextQuestion";
import { SelectQuestion } from "../UI/SelectQuestion";
import { MultipleChoiceQuestion } from "../UI/MultipleChoiceQuestion";
import { AcceptedValues } from "@/types/ClientForm";
import { Footer } from "./Footer";
import { Button } from "../UI/Button";

type TClientForm = {
  formPreviousData: Response | null;
};

export type TFormValues = Map<number, QuestionResponse>;

export const ClientForm: React.FC<TClientForm> = ({ formPreviousData }) => {
  const getDefaultFormValues: () => TFormValues = useCallback(() => {
    let tmpValues = new Map() as TFormValues;

    formPreviousData?.itens.forEach((question, index) => {
      tmpValues.set(index + 1, question);
    });
    return tmpValues;
  }, []);

  const [formValues, setFormValues] = useState<TFormValues>(
    getDefaultFormValues()
  );

  const handleFormValues = (key: number, value: AcceptedValues) => {
    const formKeyUpdated = {
      ...formValues.get(key)!,
      answerValue: value,
    } as QuestionResponse;

    let formUpdated = new Map(formValues).set(key, formKeyUpdated);

    return setFormValues(formUpdated);
  };

  const formValuesArr = Array.from(formValues.values());

  // console.log(formValues.get(6));

  return (
    <section className="max-w-4xl mx-auto flex flex-col items-center gap-4">
      <div className=" max-w-xl flex flex-col gap-4 items-start p-4 border  bg-white rounded-2xl">
        {formValuesArr.map((question, index) => {
          if (question.typeQuestion === 1) {
            return (
              <StarQuestion
                questionNumber={index + 1}
                {...question}
                key={question.content}
                answerValue={question.answerValue}
                handleValue={(star) => handleFormValues(index + 1, star)}
              />
            );
          } else if (
            question.typeQuestion === 2 ||
            question.typeQuestion === 5
          ) {
            return (
              <RadioGroupQuestion
                questionNumber={index + 1}
                {...question}
                key={question.typeQuestion}
                handleValue={(value) => handleFormValues(index + 1, value)}
                answerValue={question.answerValue}
              />
            );
          } else if (question.typeQuestion === 3) {
            return (
              <TextQuestion
                questionNumber={index + 1}
                {...question}
                key={question.content}
                handleValue={(value) => handleFormValues(index + 1, value)}
              />
            );
          } else if (question.typeQuestion === 4) {
            return (
              <SelectQuestion
                questionNumber={index + 1}
                {...question}
                key={question.content}
                handleValue={(value) => handleFormValues(index + 1, value)}
              />
            );
          } else if (question.typeQuestion === 6) {
            return (
              <MultipleChoiceQuestion
                questionNumber={index + 1}
                {...question}
                key={question.content}
                handleValue={(value) => handleFormValues(index + 1, value)}
                answerValue={question.answerValue as unknown as string[]}
              />
            );
          }
        })}

        <Button
          className="bg-orange-primary text-blue-dark ml-auto"
          onClick={() => {
            console.log(formValuesArr);
            return alert("Acesse o console para ver os dados");
          }}
        >
          Enviar
        </Button>
      </div>

      <Footer formValues={formValuesArr} />
    </section>
  );
};
