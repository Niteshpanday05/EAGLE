"use client";

import { useRouter } from "next/navigation";

import AddressForm from "@/features/addresses/components/AddressForm";
import { useCreateAddress } from "@/features/addresses/hooks/useCreateAddress";
import { AddressFormData } from "@/features/addresses/types";

export default function AddAddressPage() {
  const router = useRouter();

  const { createAddress, loading } =
    useCreateAddress();

  async function handleSubmit(
    data: AddressFormData
  ) {
    await createAddress(data);

    router.push("/addresses");
  }

  return (
    <main className="mx-auto max-w-2xl p-6">

      <h1 className="mb-6 text-3xl font-bold">
        Add Address
      </h1>

      <AddressForm
        loading={loading}
        onSubmit={handleSubmit}
      />

    </main>
  );
}