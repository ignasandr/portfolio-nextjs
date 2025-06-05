import type { Metadata } from "next";
import telIcon from "./tel.svg";
import emailIcon from "./email.svg";
import Image from "next/image";
import linkedin from "./linkedin.svg";

export const metadata: Metadata = {
  title: "IA Kontaktai",
  description:
    "Audiovizualinio menininko Igno Andriuškevičiaus portfolio puslapis",
};

const Contacts = () => {
  return (
    <div className="grid sm:grid-cols-2 pt-32 h-screen w-full">
      <div className="col-start-2 col-span-1 flex flex-col justify-self-center">
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
            +370 667 12776
          </a>
        </div>
        <div className="flex flex-row items-center">
          <Image alt="linkedin" width={16} src={linkedin} className="mr-2" />
          <a
            href="https://www.linkedin.com/in/ignas-andr/"
            className="text-lg text-blue-700 mt-1"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
