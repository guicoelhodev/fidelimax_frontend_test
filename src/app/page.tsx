import { Response } from '@/service/http/GET/useFormClientData'
import { ClientForm } from './components/ClientForm';
async function getData(): Promise<Response> {
  const res = await fetch('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json', { cache: 'force-cache'});
  if(!res.ok) {
    throw new Error('Failed to fetch data');
  };

  const data = await res.json();
  return data;
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
