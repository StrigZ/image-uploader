import MountainSVG from "./SVG/MountainSVG";

const DropZone = () => {
  return (
    <div className="bg-[#F6F8FB] border-[#97BEF4] border-dashed border-[1px] rounded-xl pt-9 px-[112px] pb-10 mb-[19px] cursor-pointer select-none">
      <MountainSVG classes="w-[114px] h-[88px] mx-auto mb-[38px]" />
      <p className=" font-medium text-xs text-[#BDBDBD]">
        Drag & Drop your image here
      </p>
    </div>
  );
};
export default DropZone;
