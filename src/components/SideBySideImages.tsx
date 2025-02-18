import Image from "next/image";

const SideBySideImages = ({
  src1,
  src2,
  caption1,
  caption2,
}: {
  src1: string;
  src2: string;
  caption1: string;
  caption2: string;
}) => {
  return (
    <div className="flex gap-4 justify-center">
      <figure className="flex-1 text-center">
        <Image src={src1} alt={caption1} width={300} height={200} />
        <figcaption className="text-sm text-gray-600 mt-2">
          {caption1}
        </figcaption>
      </figure>
      <figure className="flex-1 text-center">
        <Image src={src2} alt={caption2} width={300} height={200} />
        <figcaption className="text-sm text-gray-600 mt-2">
          {caption2}
        </figcaption>
      </figure>
    </div>
  );
};

export default SideBySideImages;
