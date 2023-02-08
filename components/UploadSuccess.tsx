import CheckCircle from "@mui/icons-material/CheckCircle";
import img from "../public/img.jpg";

const UploadSuccess = () => {
  return (
    <section className="shadow-cardShadow rounded-xl px-8 pt-8 pb-8 flex flex-col justify-center items-center font-poppins text-[#4F4F4F] md:w-[400px]">
      <CheckCircle className="text-[#219653] w-9 h-9 mb-3" />
      <h1 className="font-medium text-lg mb-[25px]">Uploaded Successfully!</h1>
      {/* <Image src="" width={0} height={0} alt="" /> */}
      <img
        className="w-full mb-[26px] rounded-xl"
        src="https://sun9-75.userapi.com/impg/qN52dlZIKTP_FbgeNxeTI7BHxcIwr2YPrI1qpw/ezhOfN1m20A.jpg?size=1280x1280&quality=96&sign=2f28b608d79a243621f9b3e7c85aa021&type=album"
        alt=""
      />
      <div className="flex justify-center items-center w-full bg-[#F6F8FB] rounded-xl  pl-2 py-0.5 pr-0.5 text-[8px] border-[#E0E0E0] border-solid border select-none">
        <input
          className="w-[50ch] outline-none bg-transparent flex-1 "
          type="text"
          value={
            "https://images.yourdomain.com/photo-1496950866446-325...".slice(
              0,
              48
            ) + "..."
          }
          readOnly
        />
        <button className="ml-[15px] bg-[#2F80ED] rounded-lg py-[9px]  pl-[20px] pr-[17px]  text-[8px] font-medium text-white">
          Copy Link
        </button>
      </div>
    </section>
  );
};
export default UploadSuccess;
