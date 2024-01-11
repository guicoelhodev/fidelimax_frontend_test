import React from "react";
import { StarSvg } from './StarSvg'

export const StarQuestion: React.FC = () => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }, (_, index) => (
        <div  key={index}>
          <StarSvg fill={index === 3 ? '#ffae00' : '#ACB1BA'}/>
        </div>
      ))}
    </div>
  );
};
