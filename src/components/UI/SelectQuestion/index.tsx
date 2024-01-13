import { FC, useState } from "react";
import { TClientQuestion } from "@/types/ClientForm";
import { FaChevronDown } from "react-icons/fa";
export const SelectQuestion: FC<TClientQuestion> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const getBorderRadiusByOrder = (index: number) => {
    if (!props.itens) return "";

    if (index === 0) return "rounded-tl-lg rounded-tr-lg";
    if (index === props.itens.length - 1) return "rounded-bl-lg rounded-br-lg";
  };

  return (
    <section className="w-full flex flex-col gap-2 relative">
      <h3 className="text-xl font-bold">{`Pergunta ${props.typeQuestion}`}</h3>

      <button
        className="border border-gray-secondary text-gray-primary p-4 rounded-lg flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="selectQuestion"
      >
        <p data-testid="selectResult">{props.answerValue || props.content}</p>

        <FaChevronDown width={24} height={24} color="#333e4f" />
      </button>

      {isOpen && (
        <div
          className="w-full bg-white absolute -bottom-44 rounded-lg flex flex-col border-gray-secondary border text-gray-primary animate-fadeIn"
          data-testid="selectList"
        >
          {props.itens?.map((item, index) => (
            <button
              key={index + "item"}
              className={`p-4 cursor-pointer w-full text-left hover:bg-slate-50 ${getBorderRadiusByOrder(
                index
              )}`}
              onClick={() => {
                props.handleValue(item.description);
                return setIsOpen(!isOpen);
              }}
              data-testid={`selectOption-${index + 1}`}
            >
              {item.description}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
