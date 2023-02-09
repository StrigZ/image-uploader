import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import ImageUpload from "../components/ImageUpload";
import Loading from "../components/Loading";
import UploadSuccess from "../components/UploadSuccess";
import { selectAppState } from "../store/appSlice";

const Home: NextPage = () => {
  const appState = useSelector(selectAppState);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {appState.isLoading ? <Loading /> : <ImageUpload />}
      </main>
    </div>
  );
};

export default Home;
