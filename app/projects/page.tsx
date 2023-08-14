import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const { container, main, title, grid, card } = styles;

let columns = 2;
let selectedProjectTail = "sauna";
let selected = true;

// when hovering, background color switches. When selected, the additional borders appear.

// using process.cwd() to get the path
// fs.readdir to get all files in directory
const GalleryPage = async () => {
  const imageDirectory = path.join(
    process.cwd(),
    `/public/images/${selectedProjectTail}`
  );
  const imageFilenames = await fs.readdir(imageDirectory);
  //   console.log(imageFilenames);

  return (
    <div className={container}>
      <div className="flex min-h-screen flex-col items-center justify-between p-12 ">
        <div className="w-96">
          <div className="border-double border-4 border-gray-400 border-b-0 bg-gray-100">
            <h1 className="p-2 text-2xl bg-white hover:bg-blue-200 cursor-zoom-in">
              Kaunas Zoo
            </h1>
          </div>
          <div className="border-double border-0 border-gray-400 bg-gray-100 hover:border-4 hover:bg-red-100 hover:ease-in">
            <div className="border-double border-4 border-gray-600 bg-gray-100 hover:border-red-400 hover:ease-in">
              <div className="border-double border-0 border-gray-400 bg-gray-100 hover:border-4 hover:ease-in">
                <h1
                  className={`p-2 text-2xl bg-white cursor-zoom-in ${
                    selected ? "text-red-600" : ""
                  }`}
                >
                  Audio pirtis
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Gallery images={imageFilenames} />
      </div>
    </div>
  );
};

const Gallery = ({ images }: { images: Array<string> }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="grid gap-4">
        {images.map((el: string) => (
          <Image
            className="h-auto max-w-full rounded-lg shadow-lg"
            width={512}
            height={256}
            alt={"alt"}
            src={`/images/${selectedProjectTail}/${el}`}
            key={el}
          />
        ))}
      </div>
    </div>
  );
};

const Title = ({ Name, Title }: { Name: string; Title: String }) => {
  return (
    <h1 className={title}>
      {Name} {Title}
    </h1>
  );
};

export default GalleryPage;
