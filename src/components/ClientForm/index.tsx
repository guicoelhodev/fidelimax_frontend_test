'use client';

import { Response, useFormClientData } from '@/hooks/GET/useFormClientData'
import { StarQuestion } from '@/components/StarQuestion';

type TClientForm = {
  formPreviousData: Response | null
}
export const ClientForm: React.FC<TClientForm> = ({ formPreviousData }) => {

  const { data } = useFormClientData({ initialData: formPreviousData})

  console.log('thats is the data', data);
  return <div className='text-red-500'>
    <StarQuestion />
  </div>;
}
