import clsx from "clsx";
import React from "react";

export const Button = ({
  type,
  centeredIcon,
  trailingIcon,
  leadingIcon,
  buttonText,
  className,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <div>
      <div
        className={clsx(
          type === "quantity"
            ? "bg-[#F4F6FD] justify-around"
            : "bg-[#F68121] px-10 cursor-pointer",
          "rounded-lg h-11 p-3 w-full flex items-center justify-center ",
          leadingIcon ? "pl-4" : "",
          trailingIcon ? "pr-4" : "",
          className
        )}
      >
        {leadingIcon && (
          <span className="cursor-pointer" onClick={handleDecrease}>
            {leadingIcon}
          </span>
        )}
        {centeredIcon && <span className="pr-4">{centeredIcon}</span>}
        {buttonText && (
          <span className={clsx("text-[#010101] font-semibold")}>
            {buttonText}
          </span>
        )}
        {trailingIcon && (
          <span className="cursor-pointer" onClick={handleIncrease}>
            {trailingIcon}
          </span>
        )}
      </div>
    </div>
  );
};
