import Image from "next/image";
import location from "../images/location.png";
import image from "../images/button-search.svg";

export default function SearchForm() {
  return (
    <>
      <form className="w-[496px] h-[56px] ml-[120px] mt-[32px] pl-[24px] flex items-center border border-[var(--color-light-grey)] rounded-[32px]">
        <Image src={location} alt="" />
        <input
          type="text"
          className="w-[345px] px-[16px] border-none outline-none"
          placeholder="Search for the location you want!"
        />
        <button 
          type="submit" 
          className="flex py-3 px-4 text-sm text-[var(--color-white)] font-[family-name:var(--font-lexend-semiBold)] bg-[var(--color-dark-green-button)] rounded-[32px] hover:bg-[var(--color-border-transparent-button)]">
          Search
          <Image src={image} alt="" />
        </button>
      </form>
    </>
  );
}
