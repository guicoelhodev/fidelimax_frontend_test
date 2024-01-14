import { FC } from "react";
import { TFormValues } from "..";
import { Button } from "@/components/UI/Button";

type TFooter = {
  formValues: TFormValues;
};
export const Footer: FC<TFooter> = ({ formValues }) => {
  return (
    <footer className="w-full flex gap-4">
      <Button className="bg-red-600 px-8">Enviar erro</Button>
      <Button className="bg-green-500 px-8">Enviar sucesso</Button>

      <Button className="bg-orange-primary text-blue-dark ml-auto ">
        Enviar fake post
      </Button>
    </footer>
  );
};
