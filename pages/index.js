import Header from "../conponents/Header";
import Hero from "../conponents/Hero";
import { siteMeta } from "../lib/constants";

export default function Home() {
  const { heading, message, image } = siteMeta.home;

  return (
    <>
      <Header heading={heading} />
      <Hero heading={heading} message={message} image={image} />
    </>
  );
}
