import Image from "next/image";
import Header from "./components/Header";
import image from "./images/image.png";

export default function Home() {
  return (
    <>
    <div className="bg-[url('./images/Color-Blur.png')] bg-no-repeat">
      <Header />
      <div className="mt-24">
      <h1 className="text-4xl text-[var(--color-text)] font-[family-name:var(--font-lexend-semiBold)]">
        Find The Place To Live 
        <span className="text-transparent -webkit-text-stroke-1 -webkit-text-stroke-black relative">
  Your Dreams
</span>
        Easily Here
      </h1>
      </div>
      <div className="absolute top-0 right-0 z-1">
        <Image src={image} alt="" className="object-cover" />
      </div>
    </div>
    </>
  );
}
