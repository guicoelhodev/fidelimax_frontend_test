import { fidelimaxFormClientData } from '@/service/http/GET/useFormClientData'
import { ClientForm } from './components/ClientForm';

export default async function Home() {
  const data = await fidelimaxFormClientData();

  return (
    <main>
      <h1 className='text-3xl text-blue-600'>Hello world</h1>
      <ClientForm formPreviousData={data} />
    </main>
  )
}
