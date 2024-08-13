import { Header } from "@/components/Header";
import { Inputs } from "@/components/Inputs";
import { Ratings } from "@/components/Ratings";
import { ImcProvider } from "@/contexts/ImcContext";

const Page = () => {
  return (
    <div className="text-black">
      <Header />
      <section className="flex flex-col px-5 max-w-4xl m-auto gap-20
        md:px-5 md:flex-col
        lg:flex-row lg:px-0">
        <ImcProvider>
          <Inputs />
          <Ratings />
        </ImcProvider>
      </section>
    </div>
  );
}

export default Page;