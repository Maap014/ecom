import React, { useContext, useState } from "react";
import { Bin, Cart, Logo, Menu } from "../svg/svg";
import clsx from "clsx";
import imageAvatar from "../../assets/images/image-avatar.png";
import { formatToDollar } from "../../utils/utils";
import { Button } from "../button/CustomButton";
import { CartContext } from "../context/cart";

export const Nav = ({ quantity, cartImage, onClick }) => {
  const homeNav = [
    { title: "Collections", id: "collections" },
    { title: "Men", id: "men" },
    { title: "Women", id: "women" },
    { title: "About", id: "about" },
    { title: "Contact", id: "contact" },
  ];
  const [activeNav, setActiveNav] = useState(homeNav[0].id);
  const [showItem, setShowItems] = useState(false);
  const { cartItems } = useContext(CartContext);
  const TotalBill = () => {
    const costOfShoe = 125;
    const TotalCost = costOfShoe * quantity;

    return TotalCost;
  };
  return (
    <div className="w-full h-[94px]  1024:h-[82px] 1024:w-[calc(100%-160px)]">
      <div className="w-[inherit] flex justify-between items-center p-8 border-b-2 gap-7 1024:p-0 fixed z-50 1024:w-[inherit] bg-white">
        <div className="flex gap-6 w-full">
          <div className="flex items-center 1024:hidden relative z-50">
            <Menu />
          </div>
          <div className="1024:grid 1024:place-content-center">
            <Logo />
          </div>
          <nav className="fixed bg-black/65 h-lvh w-full hidden top-0 left-0 1024:block 1024:relative 1024:bg-none 1024:h-max z-40">
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
          <div onClick={() => setShowItems(!showItem)}>
            <Cart />
          </div>
          <div className="w-7 h-7 rounded-full 1024:w-9 1024:h-9 1024:hover:border-2 1024:hover:border-orange-500 cursor-pointer">
            <img src={imageAvatar} alt="" />
          </div>
        </div>
        {showItem && (
          <div className="px-2  w-full absolute top-[100px] right-0 z-[999] 450:px-0 450:top-[70px] 450:right-[16px] 450:w-[330px] 1024:right-[-54px] 1024:top-[60px]">
            <div className=" bg-white shadow-md rounded-lg w-full">
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
                <>
                  {cartItems.map((item, index) => (
                    <div className="px-4 pb-3">
                      <div className=" flex items-center justify-between py-4">
                        <div className=" w-14 overflow-auto rounded-md">
                          <img src={item.productImage[0].image} alt="" />
                        </div>
                        <div className="text-[hsl(219_9%_45%)]">
                          <p>{item.name}</p>
                          {console.log("quntiity", item.quantity)}
                          <p className="text-left">
                            {`${formatToDollar(item.currentPrice)}  x ${
                              item.quantity
                            }`}
                            <span className="font-semibold text-black">
                              {formatToDollar(TotalBill())}
                            </span>
                          </p>
                        </div>
                        <div onClick={onClick}>
                          <Bin />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="w-full pb-5 ">
                    <Button
                      buttonText="Checkout"
                      className="text-nowrap hover:bg-[#f68121a9]"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
