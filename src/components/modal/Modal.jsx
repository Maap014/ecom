import clsx from "clsx";
import { Close } from "../svg/svg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const Modal = ({ type, hasCancelIcon, className }) => {
  return (
    <div
      className={clsx(
        type === "ITEM_ADDED"
          ? "bg-[hsl(22,46%,92%)] top-5 left-1/2 transform -translate-x-1/2 w-fit"
          : type === "QUANTITY_REQUIRED"
          ? "bg-[hsl(6,71%,86%)] top-5 640:top-[19.5rem] left-1/2 640:left-[1rem]  transform -translate-x-1/2 640:-translate-x-0 w-fit  "
          : type === "ITEM_EXISTS"
          ? "bg-[hsl(6,71%,86%)] top-5 left-1/2 transform -translate-x-1/2 w-fit"
          : "",
        "bg-[hsl(22,46%,92%)] py-3 px-6 fixed w-fit rounded-md z-[9999] transition-all",
        className
      )}
    >
      {hasCancelIcon && (
        <div className="absolute right-3 top-3 cursor-pointer">
          <Close />
        </div>
      )}
      <div>
        {type === "ITEM_ADDED" ? (
          <p className="flex items-center gap-1 640:text-lg">
            Item Added
            <span>
              <IoMdCheckmarkCircleOutline />
            </span>
          </p>
        ) : type === "QUANTITY_REQUIRED" ? (
          <p className="font-semibold text-[#f7725a] 640:text-lg">
            Please add a valid quantity to add to cart.
          </p>
        ) : type === "ITEM_EXISTS" ? (
          <p className="font-semibold text-[#f7725a] 640:text-lg">
            This item is already an existing entry in your cart
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
