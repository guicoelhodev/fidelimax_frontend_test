import React from "react";
import { TClientQuestion, TQuestionComponent } from "@/types/ClientForm";

export const TextQuestion: React.FC<TQuestionComponent> = (props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h3 className="text-xl font-bold">{`Pergunta ${props.questionNumber}`}</h3>

      <article className="flex gap-2">
        <p>{props.content}</p>
        {!props.mandatory && (
          <span className="text-gray-primary">(opcional)</span>
        )}
      </article>
      <textarea
        onChange={(textContent) => props.handleValue(textContent.target.value)}
        className="border border-gray-secondary p-2 resize-none rounded-lg text-gray-primary"
        value={props.answerValue}
      >
        {props.answerValue}
      </textarea>
    </div>
  );
};
