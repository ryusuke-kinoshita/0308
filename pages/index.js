import Head from "next/head";
import Hero from "../conponents/Hero";
import { siteMeta } from "../lib/constants";
const { siteTitle } = siteMeta;

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
      </Head>
      <Hero heading={siteMeta} message="Welcome" image="image1" />
    </>
  );
}
