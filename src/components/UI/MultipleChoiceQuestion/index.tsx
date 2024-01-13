import { AcceptedValues, TQuestionComponent } from "@/types/ClientForm";
import { FC } from "react";

type TMultipleChoiceQuestion = Omit<TQuestionComponent, "answerValue"> & {
  answerValue: unknown[]; // should be number[] or string[]
};
export const MultipleChoiceQuestion: FC<TMultipleChoiceQuestion> = ({
  answerValue = [],
  ...props
}) => {
  const handleAnswerContent = (isChecked: boolean, value: unknown) => {
    let selectedOptions = answerValue;

    if (isChecked) {
      selectedOptions.push(value);
    } else {
      selectedOptions = selectedOptions.filter((option) => option !== value);
    }

    return props.handleValue(selectedOptions as AcceptedValues);
  };

  const getColorButton = (isChecked: boolean) => {
    if (!isChecked) return "border-gray-terciary text-gray-quaternary bg-white";
    return "border-blue-dark text-white bg-blue-dark";
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">{`Pergunta ${props.questionNumber}`}</h3>
      <p>{props.content}</p>

      <section className={`flex gap-4 ${props.horizontal ? "" : "flex-col"}`}>
        {props.horizontal
          ? props.itens?.map((option) => (
              <button
                className={`border  py-2 px-4 rounded-full transition-colors ${getColorButton(
                  answerValue.includes(option.value)
                )}`}
                key={`button-${option.value}`}
                onClick={() =>
                  handleAnswerContent(
                    !answerValue.includes(option.value),
                    option.value
                  )
                }
              >
                {option.description}
              </button>
            ))
          : props.itens?.map((option) => (
              <article
                className="flex gap-4 items-center"
                key={`checkbox-${option.value}`}
              >
                <input
                  type="checkbox"
                  id={`checkbox-${option.value}`}
                  value={option.value}
                  key={option.value}
                  className="w-6 h-6"
                  checked={answerValue.includes(option.value)}
                  onChange={(e) =>
                    handleAnswerContent(e.target.checked, option.value)
                  }
                />

                <label htmlFor={`checkbox-${option.value}`}>
                  {option.description}
                </label>
              </article>
            ))}
      </section>
    </div>
  );
};
