import React, { useState } from "react";
import { StarSvg } from "./StarSvg";
import { TClientQuestion } from "@/types/ClientForm";

export const StarQuestion: React.FC<TClientQuestion> = ({
  handleValue,
  ...props
}) => {
  const [activeStar, setActiveStar] = useState(Number(props.answerValue) || 0);

  return (
    <div>
      <p>{props.content}</p>
      <section
        className="flex gap-2 border border-red-500"
        onMouseLeave={() => handleValue(activeStar)}
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

      <footer>{
        !props.answerValue &&
        <p>Escolha uma opção !!</p>
        
        }</footer>
    </div>
  );
};
