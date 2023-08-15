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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-scroll w-1/2 h-full p-4">
      <div className="grid gap-4">
        {images.slice(0, columnCutoff).map((el: string) => (
          <Image
            className="h-auto max-w-full rounded-md shadow-md"
            width={512}
            height={256}
            alt={"alt"}
            src={`/images/${project}/${el}`}
            key={el}
          />
        ))}
      </div>
      <div className="grid gap-4">
        {images.slice(columnCutoff, images.length).map((el: string) => (
          <Image
            className="h-auto max-w-full rounded-md shadow-lg"
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
