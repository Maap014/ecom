import React, { useContext, useState } from "react";
import { Cart, Minus, Plus } from "../components/svg/svg";
import clsx from "clsx";
import { Button } from "../components/button/CustomButton";
import { Nav } from "../components/nav/Nav";
import { formatToDollar } from "../utils/utils";
import { products } from "./constants";
import { CartContext } from "../components/context/cart";
import { Modal } from "../components/modal/Modal";

const Home = () => {
  const { addToCart, addItem, required, existingItem } =
    useContext(CartContext);
  const [activeimg, setActiveImg] = useState(
    products.map((product) => product.productImage[0].image)
  );
  const [buttonType] = useState("quantity");
  const [quantity, setQuantity] = useState(
    products.map((product) => product.quantity)
  );

  const handleIncrease = (productIndex) => {
    setQuantity((currQuantity) =>
      currQuantity.map((prevquantity, index) =>
        index === productIndex ? prevquantity + 1 : prevquantity
      )
    );
  };

  const handleDecrease = (productIndex) => {
    setQuantity((currQuantity) =>
      currQuantity.map((prevquantity, index) =>
        index === productIndex
          ? prevquantity >= 1
            ? prevquantity - 1
            : 0
          : prevquantity
      )
    );
  };

  const handleThumbnailClick = (productIndex, thumbIndex) => {
    setActiveImg((currImgs) =>
      currImgs.map((img, index) => {
        //creates new array of the curractiveimages
        if (index === productIndex) {
          // compares the activeimgs index to product index
          return products[productIndex].productImage[thumbIndex].image;
        } else return img;
      })
    );
  };

  return (
    <div className="1024:px-20">
      <Nav />
      <main className="flex flex-col justify-center items-center">
        <div className="text-left px-4 py-4 640:px-6 ">
          <h3 className="font-semibold text-gray-500 text-sm w-full">
            SNEAKER COMPANY
          </h3>
        </div>
        {products.map((product, productIndex) => {
          return (
            <div
              key={productIndex}
              className="flex flex-col gap-4 justify-center items-center 768:py-16 768:px-8 1024:gap-6 1024:justify-between 1024:flex-row max-w-[950px] w-full "
            >
              <div className=" 560:px-4 560:pt-6 640:py-8 640:px-6 768:pt-0 1024:max-w-[395px]">
                <div className="480:px-0 560:rounded-2xl 560:overflow-hidden">
                  <img src={activeimg[productIndex]} alt="" />
                </div>
                <div className="gap-6 mt-10 hidden 640:flex 640:justify-center 1024:justify-start ">
                  {product.thumbnails.map((thumbnail, thumbIndex) => {
                    return (
                      <div
                        key={thumbIndex}
                        onClick={() =>
                          handleThumbnailClick(productIndex, thumbIndex)
                        }
                        className={clsx(
                          activeimg[productIndex] ===
                            product.productImage[thumbIndex].image
                            ? "border-[3px] border-[#F68121]"
                            : "",
                          "thumbnail cursor-pointer"
                        )}
                      >
                        <img
                          className={clsx(
                            activeimg[productIndex] ===
                              product.productImage[thumbIndex].image
                              ? "opacity-[0.3] hover:opacity-[0.8]"
                              : "",
                            "w-full h-full thumbnail:hover"
                          )}
                          src={thumbnail.thumnail}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="text-left px-4 pb-4 640:px-6">
                <div className="640:px-20 1024:px-0">
                  <h1 className="text-4xl font-bold pt-2 pb-6">
                    {product.name}
                  </h1>
                  <p className="text-gray-400 leading-6 pb-4 pt-2 768:max-w-[500px]">
                    {product.description}
                  </p>
                  <div className="pb-3 flex items-center  justify-between 425:flex-col 425:justify-start 425:items-start gap-2">
                    <div>
                      <span className="font-bold text-2xl mr-3">
                        {formatToDollar(product.currentPrice)}
                      </span>{" "}
                      <span className="bg-black rounded-md text-white px-2 pb-[0.15rem] pt-[0.05rem]">
                        {product.discountRate}%
                      </span>
                    </div>
                    <div className="text-sm text-decoration-line: line-through font-medium text-gray-500">
                      {formatToDollar(product.initailPrice)}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 w-full 425:px-5 480:px-7 560:flex-row 560:px-0  ">
                    <div className="w-full 640:max-w-[200px] 1024:min-w-[200px]">
                      <Button
                        type={buttonType}
                        buttonText={quantity[productIndex]}
                        leadingIcon={<Minus className="hover:opacity-[0.5]" />}
                        handleIncrease={() => handleIncrease(productIndex)}
                        handleDecrease={() => handleDecrease(productIndex)}
                        trailingIcon={<Plus className="hover:opacity-[0.5]" />}
                      />
                    </div>
                    <div className="w-full 640:max-w-[300px]">
                      <Button
                        onClick={() =>
                          addToCart(product, quantity[productIndex])
                        }
                        centeredIcon={<Cart />}
                        buttonText="Add to cart"
                        className="text-nowrap hover:bg-[#f68121a9]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </main>
      {required && <Modal type="QUANTITY_REQUIRED" />}
      {addItem && <Modal type="ITEM_ADDED" />}
      {existingItem && <Modal type="ITEM_EXISTS" />}
    </div>
  );
};

export default Home;
