import { Response } from '@/service/http/GET/useFormClientData'
import { ClientForm } from './components/ClientForm';
import { fetchWrapper } from '@/utils/fetchWrapper';
async function getData(): Promise<Response> {
  return await fetchWrapper<Response>('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json');
}
export default async function Home() {
  const data = await getData();

  return (
    <main>
      <h1 className='text-3xl text-blue-600'>Hello world</h1>
      <ClientForm formPreviousData={data} />
    </main>
  )
}
