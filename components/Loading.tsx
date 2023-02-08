import { LinearProgress } from "@mui/material";

const Loading = () => {
  return (
    <section className="pt-9 pl-8 pb-11 pr-[28px] shadow-cardShadow md:min-w-[400px] md:min-h-[150px] rounded-xl flex flex-col justify-center">
      <h2 className="mb-[30px] font-poppins font-medium text-lg text-[#4F4F4F]">
        Uploading...
      </h2>
      {/* <div className="w-full h-[6px] bg-[#F2F2F2] rounded-lg relative after:absolute after:h-full after:w-[30%] after:bg-[#2F80ED] after:top-0 after:left-0 after:rounded-lg after:hover:animate-loading"></div> */}
      <LinearProgress className="rounded-xl" />
    </section>
  );
};
export default Loading;
