import { FC, useState } from "react";
import { Button } from "@/components/UI/Button";
import { useSendClientForm } from "@/hooks/POST/useSendClientForm";
import { QuestionResponse } from "@/hooks/GET/useFormClientData";
import { getErrorResponseModal } from "@/services/GET/getErrorResponseModal";
import { getSuccesResponseModal } from "@/services/GET/getSuccessResponseModal";
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

type TFooter = {
  formValues: QuestionResponse[];
};

export const Footer: FC<TFooter> = ({ formValues }) => {
  const { mutateAsync: sendClientForm } = useSendClientForm();

  const [requestModal, setRequestModal] = useState(false);
  const [requestMessage, setRequestMessage] = useState({
    error: "",
    warning: "",
  });

  const fetchModalMessage = async (type: "error" | "success") => {
    if (type === "error") {
      const response = await getErrorResponseModal();
      setRequestMessage(response);
    } else if (type === "success") {
      const response = await getSuccesResponseModal();
      setRequestMessage(response);
    }

    return setRequestModal(true);
  };

  return (
    <footer className="w-full flex gap-4 flex-wrap flex-row-reverse sm:flex-row">
      <div className="flex gap-4 justify-center  w-full sm:w-auto">
        <Button
          className="bg-red-600 px-8 w-full sm:w-auto"
          onClick={async () => fetchModalMessage("error")}
        >
          Enviar erro
        </Button>
        <Button
          className="bg-green-500 px-8 w-full sm:w-auto"
          onClick={async () => fetchModalMessage("success")}
        >
          Enviar sucesso
        </Button>
      </div>
      <Button
        className="bg-orange-primary text-blue-dark ml-auto w-full sm:w-auto"
        onClick={() => sendClientForm(formValues)}
      >
        Enviar fake post
      </Button>

      {requestModal && (
        <div className="w-screen h-screen fixed inset-0 backdrop-blur-md">
          <section className="w-full h-full flex justify-center items-center p-4">
            <div className="w-full max-w-96 bg-white p-4 border border-gray-secondary rounded-lg flex flex-col justify-center items-center gap-4 animate-fadeIn">
              <header
                className={`flex gap-2 items-center ${
                  requestMessage.error ? "text-red-700" : "text-green-700"
                }`}
              >
                <h3 className="font-bold text-2xl">
                  {requestMessage.error ? "Erro" : "Sucesso"}
                </h3>

                {requestMessage.error ? (
                  <MdError className="w-6 h-6" />
                ) : (
                  <FaCheckCircle className="w-6 h-6" />
                )}
              </header>

              <article>
                <p>
                  {requestMessage.error || "Requisição enviada com sucesso"}
                </p>
              </article>

              <footer>
                <Button
                  className="bg-gray-100 text-gray-primary border border-gray-secondary px-8 mt-0 w-full rounded-md"
                  onClick={() => {
                    setRequestModal(false);
                    return setRequestMessage({ error: "", warning: "" });
                  }}
                >
                  Fechar
                </Button>
              </footer>
            </div>
          </section>
        </div>
      )}
    </footer>
  );
};
