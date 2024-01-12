"use client";

import { Response, useFormClientData } from "@/hooks/GET/useFormClientData";
import { StarQuestion } from "@/components/UI/StarQuestion";
import { useState } from "react";

type TClientForm = {
  formPreviousData: Response | null;
};

export const ClientForm: React.FC<TClientForm> = ({ formPreviousData }) => {
  // const { data } = useFormClientData({ initialData: formPreviousData });
  const [activeStar, setActiveStar] = useState(formPreviousData?.itens[0].answerValue);

  if (!formPreviousData) return <p>Carregando...</p>;

  return (
    <div className="flex flex-col items-start">

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
