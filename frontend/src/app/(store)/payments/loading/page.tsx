export default function PaymentLoadingPage() {

  return (
    <div className="flex min-h-screen items-center justify-center">

      <div className="text-center space-y-4">

        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />

        <p>
          Processing payment...
        </p>

      </div>

    </div>
  );
}