import { useState } from "react";

import { AddressAPI } from "../api/address.api";
import { Address, AddressFormData } from "../types";

export function useUpdateAddress() {
  const [loading, setLoading] = useState(false);

  const updateAddress = async (
    id: number,
    payload: Partial<AddressFormData>
  ): Promise<Address> => {
    setLoading(true);

    try {
      return await AddressAPI.update(id, payload);
    } finally {
      setLoading(false);
    }
  };

  return {
    updateAddress,
    loading,
  };
}