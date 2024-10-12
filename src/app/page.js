import Image from "next/image";
import image from "./images/image.png";
import people from "./images/people.png";
import red from "./images/red.svg";
import blue from "./images/blue.svg";
import yellow from "./images/yellow.svg";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Partners from "./components/Partners";
import Recommendation from "./components/Recommendation";
import Tour from "./components/Tour";

export default function Home() {
  return (
    <>
      <div className="h-[720px]">
        <div className="bg-[url('./images/Color-Blur.png')] bg-no-repeat">
          <Header />
          <div className="pl-[120px]">
            <h1 className="mt-24 w-[496px] text-4xl text-[var(--color-text)] font-[family-name:var(--font-lexend-semiBold)] text-stroke">
              Find The Place<br></br>To Live&nbsp;
              <span className="transparent-text">
                Your Dreams<br></br>
              </span>
              Easily Here
            </h1>
            <p className="mt-6 w-[496px] text-[var(--color-grey-text)] font-[family-name:var(--font-lexend-regular)] text-base">
              Everything you need about finding your place to live will be
              <br></br> here, where it will be easier for you
            </p>
          </div>
          <div className="absolute top-0 right-0 z-1">
            <Image src={image} alt="" className="object-cover" />
          </div>
          <div className="absolute top-[141.5px] right-[569.5px] z-2">
            <Image src={red} alt="" className="object-cover" />
          </div>
          <div className="absolute top-[409px] right-[114.5px] z-2">
            <Image src={blue} alt="" className="object-cover" />
          </div>
          <div className="absolute top-[209.5px] right-[125.5px] z-2">
            <Image src={yellow} alt="" className="object-cover" />
          </div>
          <div className="absolute top-[482px] right-0 z-2">
            <Image src={people} alt="" className="object-cover" />
          </div>
          <SearchForm />
          <Partners />
        </div>
      </div>
      <Recommendation />
      <Tour />
    </>
  );
}
