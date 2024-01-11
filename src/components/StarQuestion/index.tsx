import React, { useState } from "react";
import { StarSvg } from "./StarSvg";

type TStarQuestion = {
  handleStars: (currentStarNumber: number) => void;
  currentStar: number;
}
export const StarQuestion: React.FC<TStarQuestion> = ({ handleStars, currentStar }) => {
  const [activeStar, setActiveStar] = useState(currentStar);

  return (
    <div className="flex gap-2 border border-red-500" onMouseLeave={() => handleStars(activeStar)}>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>
          <StarSvg
            fill={index + 1 <= activeStar ? "#ffae00" : "#ACB1BA"}
            starNumber={index + 1}
            onMouseEnter={(starNumber) => setActiveStar(starNumber)}
          />
        </div>
      ))}
    </div>
  );
};
