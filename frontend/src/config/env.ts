// Environmental configuration for example


// NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api/v1
// NEXT_PUBLIC_APP_NAME=Ecommerce
// NEXT_PUBLIC_MEDIA_URL=http://127.0.0.1:8000/media


const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL!,
  MEDIA_URL: process.env.NEXT_PUBLIC_MEDIA_URL!,
};

export default env;