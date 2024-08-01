import React, { useState } from "react";
import { Cart, Minus, Plus } from "../components/svg/svg";
import product1 from "../../src/assets/images/image-product-1.jpg";
import product2 from "../../src/assets/images/image-product-2.jpg";
import product3 from "../../src/assets/images/image-product-3.jpg";
import product4 from "../../src/assets/images/image-product-4.jpg";
import thumbnail1 from "../../src/assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../src/assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../src/assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../src/assets/images/image-product-4-thumbnail.jpg";
import clsx from "clsx";
import { Button } from "../components/button/CustomButton";
import { Nav } from "../components/nav/Nav";
import { formatToDollar } from "../utils/utils";

const Home = () => {
  const images = [
    { thumnail: thumbnail1, image: product1 },
    { thumnail: thumbnail2, image: product2 },
    { thumnail: thumbnail3, image: product3 },
    { thumnail: thumbnail4, image: product4 },
  ];
  const [activeimg, setActiveImg] = useState(images[0].image);
  const [buttonType] = useState("quantity");
  const [number, setNumber] = useState(0);
  const handleIncrease = () => {
    setNumber(number + 1);
  };
  const handleDecrease = () => {
    if (number === 0) {
      return;
    } else setNumber(number - 1);
  };
  return (
    <div className="1024:px-20">
      <Nav quantity={number} cartImage={activeimg} />
      <div className="flex justify-center items-center">
        <main className=" flex flex-col gap-4 justify-center items-center 768:py-16 768:px-8 1024:gap-6 1024:justify-between 1024:flex-row max-w-[950px] w-full ">
          <div className=" 560:px-4 560:pt-6 640:py-8 640:px-6 768:pt-0 1024:max-w-[395px]">
            <div className="480:px-0 560:rounded-2xl 560:overflow-hidden">
              <img src={activeimg} alt="" />
            </div>
            <div className="gap-6 mt-10 hidden 640:flex 640:justify-center 1024:justify-start ">
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setActiveImg(image.image)}
                    className={clsx(
                      activeimg === image.image
                        ? "border-[3px] border-[#F68121]"
                        : "",
                      "thumbnail cursor-pointer"
                    )}
                  >
                    <img
                      className={clsx(
                        activeimg === image.image
                          ? "opacity-[0.3] hover:opacity-[0.8]"
                          : "",
                        "w-full h-full thumbnail:hover"
                      )}
                      src={image.thumnail}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* second section */}
          <div className="text-left px-4 pb-4 640:px-6">
            <h3 className="font-semibold text-gray-500 text-sm">
              SNEAKER COMPANY
            </h3>
            <div className="640:px-20 1024:px-0">
              <h1 className="text-4xl font-bold pt-2 pb-6">
                Fall Limited Edition Sneakers
              </h1>
              <p className="text-gray-400 leading-6 pb-4 pt-2 768:max-w-[500px]">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
              <div className="pb-3 flex items-center  justify-between 425:flex-col 425:justify-start 425:items-start gap-2">
                <div>
                  <span className="font-bold text-2xl mr-3">
                    {formatToDollar(125)}
                  </span>{" "}
                  <span className="bg-black rounded-md text-white px-2 pb-[0.15rem] pt-[0.05rem]">
                    50%
                  </span>
                </div>
                <div className="text-sm text-decoration-line: line-through font-medium text-gray-500">
                  {formatToDollar(250)}
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full 425:px-5 480:px-7 560:flex-row 560:px-0  ">
                <div className="w-full 640:max-w-[200px] 1024:min-w-[200px]">
                  <Button
                    type={buttonType}
                    buttonText={number}
                    leadingIcon={<Minus className="hover:opacity-[0.5]" />}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                    trailingIcon={<Plus className="hover:opacity-[0.5]" />}
                  />
                </div>
                <div className="w-full 640:max-w-[300px]">
                  <Button
                    centeredIcon={<Cart />}
                    buttonText="Add to cart"
                    className="text-nowrap hover:bg-[#f68121a9]"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
