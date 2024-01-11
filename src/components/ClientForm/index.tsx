'use client';

import { Response, useFormClientData } from '@/hooks/GET/useFormClientData'
import { StarQuestion } from '@/components/StarQuestion';
import { useState } from 'react';

type TClientForm = {
  formPreviousData: Response | null
}
export const ClientForm: React.FC<TClientForm> = ({ formPreviousData }) => {

  const { data } = useFormClientData({ initialData: formPreviousData})
  const [activeStar, setActiveStar] = useState(0);

  // console.log('thats is the data', data);
  // console.log(activeStar);
  return <div className='text-red-500 flex flex-col items-start'>
    <StarQuestion  handleStars={(star) => setActiveStar(star)} currentStar={activeStar} />
  </div>;
}
