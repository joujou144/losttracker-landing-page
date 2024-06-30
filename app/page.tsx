import dynamic from "next/dynamic";
import { Hero, About, Why, Contact } from "@/components";
import { Fragment } from "react";

export default function Home() {
  const DynamicNavbar = dynamic(() => import("../components/Navbar"), {
    ssr: false,
    loading: () => <p>Loading..</p>,
  });

  return (
    <Fragment>
      <DynamicNavbar />
      <Hero />
      <About />
      <Why />
      <Contact />
    </Fragment>
  );
}
