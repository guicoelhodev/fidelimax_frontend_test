import React from "react";
import { TClientQuestion } from "@/types/ClientForm";

export const TextQuestion: React.FC<TClientQuestion> = (props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h3 className="text-xl font-bold">{`Pergunta ${props.typeQuestion}`}</h3>

      <article className="flex gap-2">
        <p>{props.content}</p>
        {!props.mandatory && (
          <span className="text-gray-primary">(opcional)</span>
        )}
      </article>
      <textarea
        onChange={(textContent) => props.handleValue(textContent.target.value)}
        className="border border-gray-secondary p-2 resize-none rounded-lg text-gray-primary"
      >
        {props.answerValue}
      </textarea>
    </div>
  );
};
