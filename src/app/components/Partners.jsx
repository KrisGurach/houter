import Image from "next/image";
import traveloca from "../images/traveloka_logo.png";
import ticket from "../images/ticket_logo.png";
import airbnb from "../images/airbnb_logo.png";
import tripAdv from "../images/trip-adv_logo.png";

export default function Partners() {
    return(
        <>
        <p className="mt-8 ml-[120px] w-[496px] text-[var(--color-grey)] font-[family-name:var(--font-lexend-regular)] text-base"> 
            Our Partnership
        </p>
        <div className="ml-[120px] flex gap-8">
            <Image src={traveloca} alt="" />
            <Image src={ticket} alt="" />
            <Image src={airbnb} alt="" />
            <Image src={tripAdv} alt="" />
        </div>
        </>
    )
}