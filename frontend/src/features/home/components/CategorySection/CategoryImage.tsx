import Image from "next/image";

interface Props {
  image: string | null;
  name: string;
}

export default function CategoryImage({
  image,
  name,
}: Props) {
  return (
    <div
      className="
        relative
        aspect-square
        overflow-hidden
        bg-gray-100
      "
    >
      <img
        src={image || "/images/category-placeholder.webp"}
        alt={name}
        
        sizes="
          (max-width:768px) 50vw,
          (max-width:1200px) 33vw,
          220px
        "
        className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    </div>
  );
}