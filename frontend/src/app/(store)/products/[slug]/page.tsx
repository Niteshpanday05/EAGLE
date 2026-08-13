"use client";


import { useState } from "react";
import { useParams } from "next/navigation";


import {
  AddToCartButton,
  ProductError,
  ProductSkeleton,
  QuantitySelector,
} from "@/features/products/components";


import {
  ProductGallery,
  ProductReviews,
  RelatedProducts,
} from "@/features/products/sections";


import { useProduct } from "@/features/products/hooks/useProduct";


import { formatPrice } from "@/features/products/utils/product.utils";



export default function ProductDetailPage() {


  const params = useParams();


  const slug = params.slug as string;



  const [quantity, setQuantity] = useState(1);



  const {
    data: product,
    isLoading,
    isError,
  } = useProduct(slug);



  if (!slug) {

    return (
      <ProductError message="Product slug missing." />
    );

  }



  if (isLoading) {

    return (

      <div className="container mx-auto py-10">

        <ProductSkeleton />

      </div>

    );

  }



  if (isError || !product) {

    return (

      <div className="container mx-auto py-10">

        <ProductError message="Product not found." />

      </div>

    );

  }



  return (

    <div className="container mx-auto space-y-16 py-10">


      <div className="grid gap-10 lg:grid-cols-2">



        <ProductGallery

          thumbnail={product.thumbnail}

          name={product.name}

          images={product.images}

        />




        <div className="space-y-6">


          <div>

            <p className="text-sm uppercase text-gray-500">

              {product.brand}

            </p>



            <h1 className="mt-2 text-4xl font-bold">

              {product.name}

            </h1>



            <div className="mt-3 flex gap-4">

              <span>

                ⭐ {product.rating}

              </span>


              <span className="text-gray-500">

                {product.total_reviews} Reviews

              </span>


            </div>


          </div>




          <div className="flex items-center gap-4">


            <span className="text-3xl font-bold text-blue-600">

              {formatPrice(product.final_price)}

            </span>



            {product.discount_price && (

              <span className="text-gray-400 line-through">

                {formatPrice(Number(product.price))}

              </span>

            )}



          </div>





          <div>


            {product.is_in_stock ? (

              <span className="rounded bg-green-100 px-3 py-1 text-green-700">

                In Stock ({product.stock})

              </span>


            ) : (


              <span className="rounded bg-red-100 px-3 py-1 text-red-700">

                Out of Stock

              </span>


            )}



          </div>





          <p className="leading-7 text-gray-700">

            {product.description}

          </p>




          <div>


            <p>

              <strong>SKU:</strong> {product.sku}

            </p>


            <p>

              <strong>Category:</strong> {product.category.name}

            </p>


          </div>





          <QuantitySelector

            quantity={quantity}

            max={product.stock}

            onChange={setQuantity}

          />





          <AddToCartButton

            productId={product.id}

            quantity={quantity}

            disabled={!product.is_in_stock}

          />



        </div>



      </div>





      <ProductReviews

        rating={Number(product.rating)}

        totalReviews={product.total_reviews}

      />





      <RelatedProducts

        slug={product.slug}

      />



    </div>

  );

}