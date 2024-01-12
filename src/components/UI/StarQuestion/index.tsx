import React, { useState } from "react";
import { StarSvg } from "./StarSvg";
import { TClientQuestion } from "@/types/ClientForm";

export const StarQuestion: React.FC<TClientQuestion> = ({
  handleValue,
  ...props
}) => {
  const [activeStar, setActiveStar] = useState(Number(props.answerValue) || 0);

  const isRequiredField = props.mandatory && !props.answerValue;
  return (
    <section className="flex flex-col gap-2 p-4">
      <p>{props.content}</p>
      <section
        className="flex gap-2 border border-red-500"
        onMouseLeave={() => handleValue(activeStar)}
        role="starQuestion-role"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <StarSvg
            key={index + "star"}
            fill={index + 1 <= activeStar ? "#ffae00" : "#ACB1BA"}
            starNumber={index + 1}
            onMouseEnter={(starNumber) => setActiveStar(starNumber)}
          />
        ))}
      </section>

      <footer>{isRequiredField && <p role='error-message' className="text-red-500 text-sm">Escolha uma opção</p>}</footer>
    </section>
  );
};
