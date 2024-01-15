import { fidelimaxFormClientData } from "@/hooks/GET/useFormClientData";
import { Page } from "@/components/UI/Page";
import { ClientForm } from "@/components/ClientForm";

export default async function Home() {
  const data = await fidelimaxFormClientData();

  {
    /* <ClientForm formPreviousData={data} /> */
  }
  return (
    <Page>
      <ClientForm formPreviousData={data} />
    </Page>
  );
}
