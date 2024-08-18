import React, { useContext, useState } from "react";
import { Bin, Cart, Close, Logo, Menu } from "../svg/svg";
import clsx from "clsx";
import imageAvatar from "../../assets/images/image-avatar.png";
import { formatToDollar } from "../../utils/utils";
import { Button } from "../button/CustomButton";
import { CartContext } from "../context/cart";

export const Nav = () => {
  const homeNav = [
    { title: "Collections", id: "collections" },
    { title: "Men", id: "men" },
    { title: "Women", id: "women" },
    { title: "About", id: "about" },
    { title: "Contact", id: "contact" },
  ];
  const [activeNav, setActiveNav] = useState(homeNav[0].id);
  const [showItem, setShowItems] = useState(false);
  const [showSideNav, setShowSiseNav] = useState(false);
  const { cartItems, clearCart, removeItem } = useContext(CartContext);

  const TotalBill = (item) => {
    const totalCost = item.currentPrice * item.quantity;
    return totalCost;
  };

  return (
    <div className="w-full h-[94px] 1024:h-[82px] 1024:w-[calc(100%-160px)]">
      <div className="w-[inherit] flex justify-between items-center p-8 border-b-2 gap-7 1024:p-0 fixed z-50 1024:w-[inherit] bg-white">
        <div className="flex gap-6 w-full">
          <div
            onClick={() => setShowSiseNav(!showSideNav)}
            className={clsx(
              showSideNav ? "z-50" : "",
              "flex items-center 1024:hidden relative cursor-pointer"
            )}
          >
            {showSideNav ? <Close /> : <Menu />}
          </div>
          <div className="1024:grid 1024:place-content-center">
            <Logo />
          </div>
          <nav
            className={clsx(
              showSideNav
                ? "block fixed bg-black/65 h-lvh w-full top-0 left-0"
                : "hidden",
              "1024:block 1024:relative 1024:bg-none 1024:h-max z-40"
            )}
          >
            <ul
              className="flex relative
            bg-white opacity-100 h-full w-4/6 pl-7 pt-24 flex-col items-start gap-5 font-bold z-40 1024:flex-row 1024:gap-4 1024:p-0 1024:text-gray-400 1024:font-semibold 1024:w-full 1024:justify-center 960:gap-10"
            >
              {homeNav.map((nav) => (
                <li
                  onClick={() => setActiveNav(nav.id)}
                  key={nav.id}
                  className={clsx(
                    activeNav === nav.id
                      ? "border-b-[3px] border-b-[#F68121] text-[#484747]"
                      : "",
                    "nav-hover 1024:h-20 1024:flex 1024:items-center"
                  )}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex gap-2 360:gap-4 1024:gap-6 items-center relative">
          <div
            className="relative w-7 h-7 cursor-pointer"
            onClick={() => setShowItems(!showItem)}
          >
            {cartItems.length >= 1 ? (
              <span className="bg-[#f68121] w-4 h-4 rounded-full absolute -top-1.5 -right-0.5 z-10 text-white text-xs">
                {cartItems.length}
              </span>
            ) : (
              <></>
            )}
            <Cart />
          </div>
          <div className="w-7 h-7 rounded-full 1024:w-9 1024:h-9 1024:hover:border-2 1024:hover:border-orange-500 cursor-pointer">
            <img src={imageAvatar} alt="" />
          </div>
        </div>
        {showItem && (
          <div className="px-2  w-full absolute top-[100px] right-0 z-[999] 450:px-0 450:top-[70px] 450:right-[16px] 450:w-[330px] 1024:right-[-54px] 1024:top-[60px]">
            <div className=" bg-white shadow-md rounded-lg w-full ">
              <div className="border-b-[#10101026] border-b text-left px-4 py-5 text-[16x] text-black font-medium">
                Cart
              </div>
              {cartItems.length === 0 ? (
                <div>
                  <p className="text-nowrap text-[hsl(219_9%_45%)] text-center py-16">
                    Your Cart is Empty{" "}
                  </p>
                </div>
              ) : (
                <div className="px-4 pb-3">
                  <div className="h-full max-h-[176px] overflow-y-auto no-scrollbar">
                    {cartItems.map((item, index) => (
                      <div key={index}>
                        <div className=" flex items-center justify-between py-4 px-1">
                          <div className=" w-14 overflow-auto rounded-md">
                            <img src={item.productImage[0].image} alt="" />
                          </div>
                          <div className="text-[hsl(219_9%_45%)]">
                            <p>{item.name}</p>
                            <p>
                              {`${formatToDollar(item.currentPrice)}  x  ${
                                item.quantity
                              }`}
                              <span className="font-semibold text-black">
                                {` ${formatToDollar(TotalBill(item))}`}
                              </span>
                            </p>
                          </div>
                          <div
                            className="cursor-pointer hover:scale-125 transition-all"
                            onClick={() => removeItem(item)}
                          >
                            <Bin className="fill-[#C3CAD9] hover:fill-[#f68121a9] " />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full pb-5 ">
                    <Button
                      buttonText="Clear Cart"
                      className="text-nowrap hover:bg-[#f68121a9] mb-3 hover:scale-105 transition-all"
                      onClick={() => clearCart()}
                    />
                    <Button
                      buttonText="Checkout"
                      className="text-nowrap hover:bg-[#f68121a9] hover:scale-105 transition-all"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
