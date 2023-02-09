import { uuidv4 } from "@firebase/util";
import { ref, uploadBytes } from "firebase/storage";
import { FileUploader } from "react-drag-drop-files";
import { storage } from "../firebaseConfig";
import DropZone from "./DropZone";
import { setIsLoading } from "../store/appSlice";
import { useDispatch } from "react-redux";

const ImageUpload = () => {
  const dispatch = useDispatch();

  const dropHandler = (file) => {
    dispatch(setIsLoading(true));
    const id = uuidv4();
    const storageRef = ref(storage, `images/${id}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded");
      dispatch(setIsLoading(false));
    });
  };

  return (
    <section className="shadow-[0px_4px_12px] shadow-[#00000019] px-8 py-9 rounded-xl flex flex-col items-center font-poppins md:w-[clamp(400px, 50vw, 800px)]">
      <h1 className=" font-medium text-lg text-[#4F4F4F] mb-4">
        Upload your image
      </h1>
      <p className="mb-[30px] font-medium text-[10px] text-[#828282]">
        File should be JPEG, PNG
      </p>
      <FileUploader
        types={["png", "jpeg", "jpg"]}
        multiple={false}
        children={<DropZone />}
        onDrop={dropHandler}
        maxSize={5}
      />
      <p className="text-center text-xs text-[#BDBDBD] font-medium">Or</p>
      <label
        className="block mt-[22px] bg-[#2F80ED] rounded-lg py-2 px-4 font-notoSans text-xs font-medium text-white cursor-pointer"
        htmlFor="upload"
      >
        Choose a file
        <input
          className="hidden -z-10"
          type="file"
          id="upload"
          accept=".png, .jpg, .jpeg"
        />
      </label>
    </section>
  );
};
export default ImageUpload;
