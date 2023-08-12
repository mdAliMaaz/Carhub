"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

const Searchbar = (props: Props) => {
  // STATES
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === " " && model === " ") {
      return alert("Please fill the serach bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPath = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPath);
  };

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        {/* SEARCH BUTTON */}
        <SearchButton otherClasses='sm:hidden' />
      </div>

      <div className=' searchbar__item'>
        <Image
          src={"/model-icon.png"}
          alt='model'
          width={25}
          height={25}
          className=' absolute w-[20px] h-[20px] ml-4'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Model'
          className=' searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default Searchbar;

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt='search'
      width={40}
      height={40}
      className=' object-contain'
    />
  </button>
);
