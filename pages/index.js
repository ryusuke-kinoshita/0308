import Header from "../conponents/Header";
import Hero from "../conponents/Hero";
import { siteMeta } from "../lib/constants";
const { siteTitle } = siteMeta;

export default function Home() {
  return (
    <>
      <Header />
      <Hero heading={siteTitle} message="Welcome" image="image1" />
    </>
  );
}
