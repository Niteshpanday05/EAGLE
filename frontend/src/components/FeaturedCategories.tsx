import Image from "next/image";
import Link from "next/link";


const categories = [
  {
    name: "Smartphones",
    description: "Latest flagship devices",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    name: "Laptops",
    description: "Power meets performance",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    name: "Audio",
    description: "Premium sound experience",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    name: "Wearables",
    description: "Smart lifestyle technology",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    name: "Gaming",
    description: "Level up your setup",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
  },
];


function CategoryCard({
  category,
}: {
  category: typeof categories[0];
}) {

  return (
    <Link
      href="#"
      className="
        group
        relative
        h-[380px]
        overflow-hidden
        bg-white
        shadow-sm
        transition
        duration-500
        hover:shadow-xl
      "
    >

      <img
        src={category.image}
        alt={category.name}
        
        className="
          object-cover
          transition
          duration-700
          group-hover:scale-105
        "
      />


      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
        "
      />


      <div
        className="
          absolute
          bottom-8
          left-8
          text-white
        "
      >

        <h3 className="text-3xl font-semibold">
          {category.name}
        </h3>


        <p className="mt-2 text-sm text-white/80">
          {category.description}
        </p>

      </div>

    </Link>
  );
}



export default function FeaturedCategories() {

  const firstRow = categories.slice(0,2);
  const secondRow = categories.slice(2,5);


  return (
    <section
      className="
        bg-gradient-to-b
        from-orange-100
        via-orange-50
        to-white
        py-24
      "
    >

      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">


        {/* Heading */}

        <div className="mb-14 text-center">

          <p
            className="
              mb-3
              text-sm
              uppercase
              tracking-[0.3em]
              text-orange-600
            "
          >
            Explore Collection
          </p>


          <h2
            className="
              text-4xl
              font-semibold
              text-gray-900
              md:text-5xl
            "
          >
            Featured Categories
          </h2>


          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Discover premium technology products designed for modern living.
          </p>

        </div>



        {/* First Row - 2 Cards */}

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
          "
        >

          {firstRow.map((category)=>(
            <CategoryCard
              key={category.name}
              category={category}
            />
          ))}

        </div>



        {/* Second Row - 3 Cards */}

        <div
          className="
            mt-6
            grid
            gap-6
            md:grid-cols-3
          "
        >

          {secondRow.map((category)=>(
            <CategoryCard
              key={category.name}
              category={category}
            />
          ))}

        </div>


      </div>

    </section>
  );
}