import { placeholderAPI } from "@/services/axios";
import { useMutation } from "@tanstack/react-query";
import { QuestionResponse } from "@/hooks/GET/useFormClientData";

export const useSendClientForm = () => {
  return useMutation({
    mutationFn: async (formValues: QuestionResponse[]) => {
      try {
        const response = await placeholderAPI.post("/posts", {
          body: formValues,
        });

        alert("Formulário enviado com sucesso");
        return response;
      } catch (error) {
        alert("Erro ao enviar o formulário");
      }
    },
  });
};
