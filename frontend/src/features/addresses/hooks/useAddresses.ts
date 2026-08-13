"use client";

import { useEffect, useState } from "react";

import AddressApi from "../api/address.api";
import { Address } from "@/features/addresses/types";

export function useAddresses() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await AddressApi.getAddresses();
        setAddresses(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    addresses,
    loading,
  };
}