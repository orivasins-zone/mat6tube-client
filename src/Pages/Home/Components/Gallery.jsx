import { IoVideocam } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";

const images = import.meta.glob("../../../../src/assets/gallery_img/*.png", {
  eager: true,
});

const imgs = Object.values(images).map((img) => img.default);

const Gallery = () => {
  return (
    <div>
      <div className="py-3.5">
        {/* Top Btn */}
        <div className="flex justify-between items-center">
          <div className="bg-[#242424] md:w-68.75 py-1 px-2 flex items-center gap-2">
            <IoVideocam className="text-red-700 text-xl" />
            hd movie
          </div>
          <div className="flex items-center gap-2.5 cursor-pointer">
            filter <MdOutlineArrowDropDown />{" "}
          </div>
        </div>

        {/* Display Gallery */}
        <div className="bg-[#242424]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  px-2 overflow-hidden">
            {imgs.map((img, i) => (
              <div>
                <img
                  src={img}
                  alt=""
                  key={i}
                  className="w-full object-cover cursor-pointer"
                />
                <p>x</p>
              </div>
            ))}
          </div>
          <div className="text-center px-3 my-4 pb-5">
            <button className="text-center bg-[#111111] w-full py-1.5 text-white">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
