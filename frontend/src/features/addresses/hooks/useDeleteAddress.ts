import { useState } from "react";

import { AddressAPI } from "../api/address.api";

export function useDeleteAddress() {
  const [loading, setLoading] = useState(false);

  const deleteAddress = async (
    id: number
  ): Promise<void> => {
    setLoading(true);

    try {
      await AddressAPI.remove(id);
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteAddress,
    loading,
  };
}