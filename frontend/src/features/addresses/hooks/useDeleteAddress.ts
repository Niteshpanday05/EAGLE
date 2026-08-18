"use client";

import { useState } from "react";
import AddressApi from "../api/address.api";

export function useDeleteAddress() {
  const [loading, setLoading] = useState(false);

  async function deleteAddress(id: number) {
    try {
      setLoading(true);
      await AddressApi.deleteAddress(id);
    } finally {
      setLoading(false);
    }
  }

  return {
    deleteAddress,
    loading,
  };
}