import React from "react";
import { TClientQuestion, TQuestionComponent } from "@/types/ClientForm";

type TRadioGroupQuestion = Omit<TQuestionComponent, "handleValue"> & {
  handleValue: (value: number) => void;
};

export const RadioGroupQuestion: React.FC<TRadioGroupQuestion> = (props) => {
  const isRequiredField = props.mandatory && Number(props.answerValue) === 0;

  return (
    <section className="flex flex-col gap-4 w-full">
      <h3 className="text-xl font-bold">{`Pergunta ${props.questionNumber}`}</h3>
      <p>{props.content}</p>

      <fieldset
        className={`flex gap-4 ${
          props.typeQuestion === 2 ? "justify-between" : ""
        }`}
      >
        {props.typeQuestion === 5
          ? props.itens?.map((radioOption, index) => (
              <div key={`radio_${index}`} className="flex gap-2">
                <input
                  className="w-6 h-6 cursor-pointer"
                  type="radio"
                  id={radioOption.description}
                  value={radioOption.value}
                  checked={index + 1 === props.answerValue}
                  onChange={() => props.handleValue(index + 1)}
                />
                <label htmlFor={radioOption.description}>
                  {radioOption.description}
                </label>
              </div>
            ))
          : null}

        {props.typeQuestion === 2 ? (
          <>
            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={`radio_${index}`}
                className="flex flex-col gap-2 items-center"
              >
                <input
                  type="radio"
                  id={`radio_${index + 1}`}
                  value={index + 1}
                  className="w-6 h-6 cursor-pointer"
                  checked={index + 1 === props.answerValue}
                  onChange={() => props.handleValue(index + 1)}
                />
                <label htmlFor={`radio_${index + 1}`}>{index + 1}</label>
              </div>
            ))}
          </>
        ) : null}
      </fieldset>

      <footer>
        {isRequiredField && (
          <p role="error-message" className="text-red-500 text-sm">
            Avalie essa questão
          </p>
        )}
      </footer>
    </section>
  );
};
