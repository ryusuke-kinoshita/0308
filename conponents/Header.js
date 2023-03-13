import Head from "next/head";

export default function Header({ heading }) {
  return (
    <Head>
      <title>{heading}</title>
      <link rel="icon" href="favicon.svg" />
    </Head>
  );
}
