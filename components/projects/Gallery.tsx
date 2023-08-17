import Image from "next/image";

const Gallery = ({
  project,
  images,
}: {
  project: string;
  images: string[];
}) => {
  const columnCutoff: number = Math.ceil(images.length / 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full p-4">
      <div className="grid gap-4 justify-center">
        {images.slice(0, columnCutoff).map((el: string, index) => (
          <Image
            className={`h-auto max-w-full rounded shadow-md translate-y-${index} translate-x-${index}`}
            width={512}
            height={256}
            alt={"alt"}
            src={`/images/${project}/${el}`}
            key={el}
          />
        ))}
      </div>
      <div className="grid gap-4 justify-center">
        {images.slice(columnCutoff, images.length).map((el: string, index) => (
          <Image
            className={`h-auto max-w-full rounded shadow-md`}
            width={512}
            height={256}
            alt={"alt"}
            src={`/images/${project}/${el}`}
            key={el}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
