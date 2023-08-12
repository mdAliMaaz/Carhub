"use client";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils/inden";

type Props = {
  pageNumber: number;
  isNext: boolean;
};

const Showmore = ({ pageNumber, isNext }: Props) => {
  const rouer = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPath = updateSearchParams("limit", `${newLimit}`);
    // WHEN YOU WANT TO SEND A NUMBER BUT FUN ACCEPT ONLY STRINF USE STRING LITERAL
    rouer.push(newPath);
  };
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          btnType='button'
          title='Show More'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default Showmore;
