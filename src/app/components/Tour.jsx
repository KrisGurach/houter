import Image from "next/image";
import photo from "../images/houses/dianne.png"
// import TourSlider from "./TourSlider";

export default function Tour() {
  return (
    <div className=" mt-[120px] flex items-center gap-[148px]">
      <div className="ml-[120px]">
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-[32px] bg-[var(--color-yellow)]"></div>
          <h2 className="text-xs text-[var(--color-yellow)] font-[family-name:var(--font-lexend-medium)]">
            Ready To Sell!
          </h2>
        </div>
        <p className="mt-3 mb-4 text-2xl text-[var(--color-text)] font-[family-name:var(--font-lexend-semiBold)]">
          Let’s tour and see our house!
        </p>
        <p className="mb-4 max-w-[413px] text-[var(--color-grey-text)] font-[family-name:var(--font-lexend-regular)] text-base">
          Houses recommended by our partners that have been curated to become
          the home of your dreams!
        </p>
        <div className="max-w-[440px]">
          <h3 className="mb-4 text-[var(--color-text)] font-[family-name:var(--font-lexend-semiBold)] text-base">
            House detail
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <p className="pl-[38px] pt-1 max-w-[193.5] min-h-[32px] col-span-1 text-left text-[var(--color-text-3)] font-[family-name:var(--font-lexend-medium)] text-base picture bedroom">
                4 bedrooms
            </p>
            <p className="pl-[38px] pt-1 max-w-[193.5] min-h-[32px] col-span-1 text-left text-[var(--color-text-3)] font-[family-name:var(--font-lexend-medium)] text-base picture bathroom">
                2 bathrooms
            </p>
            <p className="pl-[38px] pt-1 max-w-[193.5] min-h-[32px] col-span-1 text-left text-[var(--color-text-3)] font-[family-name:var(--font-lexend-medium)] text-base picture carpot">
                1 carport
                </p>
            <p className="pl-[38px] pt-1 max-w-[193.5] min-h-[32px] col-span-1 text-left text-[var(--color-text-3)] font-[family-name:var(--font-lexend-medium)] text-base picture floor">
                2 floors
            </p>
          </div>
        </div>
        <div className="my-8 h-[2px] w-[440px] bg-[var(--color-txt-transparent-button)]"></div>
        <div className="flex">
            <Image className="w-14 h-14" src={photo} alt="rieltor's photo" />
            <div className="ml-6 mr-[59px]">
                <p className="mb-1 text-[var(--color-text-2)] font-[family-name:var(--font-lexend-medium)] text-[18px]">
                    Dianne Rassel
                </p>
                <p className="text-[var(--color-medium-grey)] font-[family-name:var(--font-lexend-medium)] text-bade">
                    Manager Director
                </p>
            </div>
            <button className="pl-14 pr-4 max-w-[163px] min-h-12 rounded-[32px] bg-[var(--color-dark-green-button)] text-[var(--color-white)] font-[family-name:var(--font-lexend-semiBold)] text-sm call">
                Contact Now
            </button>
        </div>
      </div>
      {/* <TourSlider /> */}
    </div>
  );
}
