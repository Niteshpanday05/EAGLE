import { useState } from "react";

import AddressAPI from "@/features/addresses/api/address.api";

export function useSetDefaultAddress() {
  const [loading, setLoading] = useState(false);

  const setDefaultAddress = async (id: number) => {
    setLoading(true);

    try {
      await AddressAPI.setDefaultAddress(id);
    } finally {
      setLoading(false);
    }
  };

  return {
    setDefaultAddress,
    loading,
  };
}