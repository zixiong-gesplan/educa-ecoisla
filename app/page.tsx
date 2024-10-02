import Image from "next/image";
import { Hero } from "./sections/01-main";
import { Description } from "./sections/02-description";
import { Targets } from "./sections/03-targets";
import { Tools } from "./sections/04-tools";
import { Actions } from "./sections/05-actions";
import { Footer } from "./sections/06-footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Hero></Hero>
        <Description></Description>
        <Targets></Targets>

        <section className="h-6"></section>
        <Tools></Tools>
        <Actions></Actions>
        <section className="h-20"></section>
      </main>
      <Footer></Footer>
    </>
  );
}
