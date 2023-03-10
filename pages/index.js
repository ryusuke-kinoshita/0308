import Head from "next/head";
import Hero from "../conponents/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
      </Head>
      <Hero heading="Ryusuke's portfolio" message="Welcome" image="image1" />
    </>
  );
}
