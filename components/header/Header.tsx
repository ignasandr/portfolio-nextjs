"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  let active: boolean = pathname === "/";

  return (
    <div className="flex w-full justify-center items-end">
      <button
        className={`border-double border-0 border-gray-400 bg-gray-100 hover:border-b-4 w-full text-left ${
          active ? "border-b-4 border-l-4" : ""
        }`}
      >
        <div
          className={`border-double border-2 border-t-0 border-b-0 border-r-4 border-gray-500 bg-gray-100 ${
            active ? "border-gray-200" : ""
          }`}
        >
          <div
            className={`border-double border-0 border-gray-400 bg-gray-200 ${
              active ? "border-b-4 border-l-4" : ""
            }`}
          >
            <Link href="/">
              <h1
                className={`p-2 text-xl bg-white cursor-pointer ${
                  active ? "text-red-600" : `hover:text-gray-400`
                }`}
              >
                Portfolio
              </h1>
            </Link>
          </div>
        </div>
      </button>
      <button
        className={`border-double border-0 border-gray-400 bg-gray-100 hover:border-b-4 w-full text-left ${
          !active ? "border-b-4 border-r-4" : ""
        }`}
      >
        <div
          className={`border-double border-2 border-t-0 border-b-4 border-gray-500 bg-gray-100 ${
            !active ? "border-gray-200" : ""
          }`}
        >
          <div
            className={`border-double border-0 border-gray-400 bg-gray-200 ${
              !active ? "border-b-4 border-r-4" : ""
            }`}
          >
            <Link href="/kontaktai">
              <h1
                className={`p-2 text-xl bg-white cursor-pointer ${
                  !active ? "text-red-600" : `hover:text-gray-400`
                }`}
              >
                Kontaktai
              </h1>
            </Link>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Header;
