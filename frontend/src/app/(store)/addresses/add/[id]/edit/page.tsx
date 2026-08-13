"use client";

import { useEffect, useState } from "react";
import {
  useParams,
  useRouter,
} from "next/navigation";

import AddressForm from "@/features/addresses/components/AddressForm";
import { AddressAPI } from "@/features/addresses/api/address.api";
import { useUpdateAddress } from "@/features/addresses/hooks/useUpdateAddress";
import {
  Address,
  AddressFormData,
} from "@/features/addresses/types";

export default function EditAddressPage() {
  const params = useParams();

  const router = useRouter();

  const id = Number(params.id);

  const [address, setAddress] =
    useState<Address>();

  const { updateAddress, loading } =
    useUpdateAddress();

  useEffect(() => {
    async function load() {
      const data = await AddressAPI.getById(id);

      setAddress(data);
    }

    load();
  }, [id]);

  async function handleSubmit(
    data: AddressFormData
  ) {
    await updateAddress(id, data);

    router.push("/addresses");
  }

  if (!address) {
    return <p>Loading...</p>;
  }

  return (
    <main className="mx-auto max-w-2xl p-6">

      <h1 className="mb-6 text-3xl font-bold">
        Edit Address
      </h1>

      <AddressForm
        initialData={address}
        loading={loading}
        onSubmit={handleSubmit}
      />

    </main>
  );
}