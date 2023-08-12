"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
};

const CustomButton = ({
  btnType,
  title,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
}: Props) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className=' relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='righ-icon'
            fill
            className=' object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
