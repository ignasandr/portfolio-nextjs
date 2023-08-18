import type { Metadata } from "next";
import telIcon from "./tel.svg";
import emailIcon from "./email.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IA Kontaktai",
  description:
    "Audiovizualinio menininko Igno Andriuškevičiaus portfolio puslapis",
};

const Contacts = () => {
  return (
    <div className="flex justify-center pt-48 h-screen">
      <div className="flex flex-col">
        <h1 className="text-2xl">Ignas Andriuškevičius</h1>
        <div className="flex flex-row items-center my-2">
          <Image alt="email" width={16} src={emailIcon} className="mr-2" />
          <a href="mailto:ignas.an@gmail.com" className="text-xl text-blue-700">
            ignas.an@gmail.com
          </a>
        </div>
        <div className="flex flex-row items-center">
          <Image alt="phone" width={16} src={telIcon} className="mr-2" />
          <a href="tel:+37067948741" className="text-lg text-blue-700">
            +370 679 48741
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
