import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ImageUpload from "../components/ImageUpload";
import Loading from "../components/Loading";
import UploadSuccess from "../components/UploadSuccess";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <ImageUpload />
        {/* <Loading /> */}
        {/* <UploadSuccess /> */}
      </main>
    </div>
  );
};

export default Home;
