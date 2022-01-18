import Head from "next/head";
import { Cine } from "../components/Cine";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>CINE ITAUNA</title>
        <meta property="og:title" content="CINE ITAUNA" />
        <meta name="description" content="Gerador de social media" />
        <meta property="og:description" content="Gerador de social media" />
        <meta property="og:image" content="/logo.png" key="ogimage" />
      </Head>
      <Cine />
      <Footer />
    </>
  );
}
