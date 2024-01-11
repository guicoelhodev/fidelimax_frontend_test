"use client";

import { Response, useFormClientData } from "@/hooks/GET/useFormClientData";
import { StarQuestion } from "@/components/UI/StarQuestion";
import { useState } from "react";

type TClientForm = {
  formPreviousData: Response | null;
};

export const ClientForm: React.FC<TClientForm> = ({ formPreviousData }) => {
  // const { data } = useFormClientData({ initialData: formPreviousData });
  const [activeStar, setActiveStar] = useState(0);

  // console.log(activeStar)
  // console.log('thats is the data', data);
  if (!formPreviousData) return <p>Carregando...</p>;

  const a = {
    0: StarQuestion
  };


  return (
    <div className="text-red-500 flex flex-col items-start">

      {
        formPreviousData.itens.map(question => {

          if(question.typeQuestion === 1) {
            return (
              <StarQuestion
                {...question}
                key={question.content}
                answerValue={activeStar}
                handleValue={(star) => setActiveStar(Number(star))}
              />
            )
          }
        })

      }
    </div>
  );
};
