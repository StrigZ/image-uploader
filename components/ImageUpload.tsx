import MountainSVG from "./SVG/MountainSVG";

const ImageUpload = () => {
  return (
    <section className="shadow-[0px_4px_12px] shadow-[#00000019] px-8 py-9 rounded-xl flex flex-col items-center font-poppins md:w-[clamp(400px, 50vw, 800px)]">
      <h1 className=" font-medium text-lg text-[#4F4F4F] mb-4">
        Upload your image
      </h1>
      <p className="mb-[30px] font-medium text-[10px] text-[#828282]">
        File should be JPEG, PNG
      </p>
      <div className="bg-[#F6F8FB] border-[#97BEF4] border-dashed border-[1px] rounded-xl pt-9 px-[112px] pb-10 mb-[19px] cursor-pointer select-none">
        <MountainSVG classes="w-[114px] h-[88px] mx-auto mb-[38px]" />
        <p className=" font-medium text-xs text-[#BDBDBD]">
          Drag & Drop your image here
        </p>
      </div>
      <p className="text-center text-xs text-[#BDBDBD] font-medium">Or</p>
      <button className="block mt-[22px] bg-[#2F80ED] rounded-lg py-2 px-4 font-notoSans text-xs font-medium text-white">
        Choose a file
      </button>
    </section>
  );
};
export default ImageUpload;
