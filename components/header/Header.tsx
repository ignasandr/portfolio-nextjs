"use client";

const Header = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="flex w-full justify-center items-end">
      <button
        onClick={() => onClick()}
        className={`border-double border-0 border-gray-400 bg-gray-100 hover:border-l-4 w-full text-left ${
          active ? "border-4" : ""
        }`}
      >
        <div
          className={`border-double border-2 border-b-0 border-r-4 border-gray-500 bg-gray-100 ${
            active ? "border-gray-200" : ""
          }`}
        >
          <div
            className={`border-double border-0 border-gray-400 bg-gray-200 ${
              active ? "border-4" : ""
            }`}
          >
            <h1
              className={`p-2 text-xl bg-white cursor-pointer ${
                active ? "text-red-600" : `hover:text-gray-400`
              }`}
            >
              Portfolio
            </h1>
          </div>
        </div>
      </button>
      <button
        onClick={() => onClick()}
        className={`border-double border-0 border-gray-400 bg-gray-100 hover:border-b-4 w-full text-left ${
          !active ? "border-4" : ""
        }`}
      >
        <div
          className={`border-double border-2 border-b-4 border-gray-500 bg-gray-100 ${
            !active ? "border-gray-200" : ""
          }`}
        >
          <div
            className={`border-double border-0 border-gray-400 bg-gray-200 ${
              !active ? "border-4" : ""
            }`}
          >
            <h1
              className={`p-2 text-xl bg-white cursor-pointer ${
                !active ? "text-red-600" : `hover:text-gray-400`
              }`}
            >
              Kontaktai
            </h1>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Header;
