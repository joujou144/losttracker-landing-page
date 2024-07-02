import { About, Contact, Hero, Why } from "@/components";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <About />
      <Why />
      <Contact />
    </main>
  );
}
