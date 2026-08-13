"use client";

import { useRouter } from "next/navigation";

import AddressList from "@/features/addresses/components/AddressList";
import { useAddresses } from "@/features/addresses/hooks/useAddresses";
import { useDeleteAddress } from "@/features/addresses/hooks/useDeleteAddress";
import { useSetDefaultAddress } from "@/features/addresses/hooks/useSetDefaultAddress";

export default function AddressesPage() {
  const router = useRouter();

  const { addresses, loading, refetch } = useAddresses();

  const { deleteAddress } = useDeleteAddress();

  const { setDefaultAddress } = useSetDefaultAddress();

  async function handleDelete(id: number) {
    await deleteAddress(id);
    refetch();
  }

  async function handleDefault(id: number) {
    await setDefaultAddress(id);
    refetch();
  }

  function handleEdit(address: { id: number }) {
    router.push(`/addresses/${address.id}/edit`);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="mx-auto max-w-5xl p-6">

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          My Addresses
        </h1>

        <button
          onClick={() => router.push("/addresses/add")}
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Add Address
        </button>

      </div>

      <AddressList
        addresses={addresses}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSetDefault={handleDefault}
      />

    </main>
  );
}