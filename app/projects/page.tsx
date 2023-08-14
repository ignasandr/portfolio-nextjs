import { promises as fs } from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const { container, main, title, grid, card } = styles;

let selectedProjectTail = "sauna";

// using process.cwd() to get the path
// fs.readdir to get all files in directory
const GalleryPage = async () => {
  const imageDirectory = path.join(
    process.cwd(),
    `/public/images/${selectedProjectTail}`
  );
  const imageFilenames = await fs.readdir(imageDirectory);
  console.log(imageFilenames);

  return (
    <div className={container}>
      <div className={main}>
        <Title Name="Gallery" Title={"Proof of Concept"} />
        <Gallery images={imageFilenames} />
      </div>
    </div>
  );
};

const Gallery = ({ images }: { images: Array<string> }) => {
  return (
    <div className={grid}>
      {images.map((el: string) => (
        <Image
          className={card}
          width={512}
          height={256}
          alt={"alt"}
          src={`/images/${selectedProjectTail}/${el}`}
          key={el}
          style={{ height: "auto" }}
        />
      ))}
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
