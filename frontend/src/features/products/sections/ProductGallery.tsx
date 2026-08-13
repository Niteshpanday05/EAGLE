"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  thumbnail: string;
  name: string;
  images?: string[];
}

export default function ProductGallery({
  thumbnail,
  name,
  images = [],
}: ProductGalleryProps) {
  const allImages = [
    thumbnail,
    ...images.filter((image) => image !== thumbnail),
  ].filter(Boolean);

  const [selectedImage, setSelectedImage] = useState(
    allImages[0] || thumbnail
  );

  if (!selectedImage) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-2xl bg-gray-100">
        No image available
      </div>
    );
  }

  const getImageUrl = (image: string) => {
    if (image.startsWith("http")) {
      return image;
    }

    return `${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`;
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
      <Image
  src={getImageUrl(selectedImage)}
  alt={name}
  fill
  priority
  className="object-cover"
/>
      </div>

      {/* Thumbnails */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {allImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
                selectedImage === image
                  ? "border-blue-600"
                  : "border-gray-200"
              }`}
            >
              <Image
                src={getImageUrl(image)}
                alt={`${name} ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}