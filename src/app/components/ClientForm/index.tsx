'use client';

import { Response, useFormClientData } from '@/service/http/GET/useFormClientData'

type TClientForm = {
  formPreviousData: Response
}
export const ClientForm: React.FC<TClientForm> = ({ formPreviousData }) => {

  const { data } = useFormClientData({ initialData: formPreviousData})

  console.log('thats is the data', data);
  return <div>
    dsajhdsakjadshjk 
  </div>;
}
