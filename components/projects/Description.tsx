const Description = ({
  title,
  subtitle,
  description,
  authors,
}: {
  title: string | undefined;
  subtitle: string | undefined;
  description: string | undefined;
  authors: string | undefined;
}) => {
  return (
    <div className="flex flex-col justify-between pt-6 px-8 md:w-1/2 pb-6 border-double border-4 border-l-0 border-t-0 border-gray-400 bg-white ">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <h2 className="text-lg italic">{subtitle}</h2>
        <div className="pt-3">{description}</div>
      </div>

      {authors !== "" && (
        <h3 className="">
          <span className="italic text-lg">Bendraautoriai:</span> {authors}
        </h3>
      )}
    </div>
  );
};

export default Description;
