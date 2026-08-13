"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Address, AddressFormData } from "../types";
import { addressSchema } from "../validation";

interface AddressFormProps {
  initialData?: Address;
  loading?: boolean;
  onSubmit: (data: AddressFormData) => Promise<void>;
}

export default function AddressForm({
  initialData,
  loading = false,
  onSubmit,
}: AddressFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      full_name: "",
      phone_number: "",
      country: "",
      state: "",
      city: "",
      postal_code: "",
      address_line_1: "",
      address_line_2: "",
      landmark: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        full_name: initialData.full_name,
        phone_number: initialData.phone_number,
        country: initialData.country,
        state: initialData.state,
        city: initialData.city,
        postal_code: initialData.postal_code,
        address_line_1: initialData.address_line_1,
        address_line_2: initialData.address_line_2,
        landmark: initialData.landmark,
      });
    }
  }, [initialData, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-1 block font-medium">
          Full Name
        </label>

        <input
          {...register("full_name")}
          className="w-full rounded-lg border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.full_name?.message}
        </p>
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Phone Number
        </label>

        <input
          {...register("phone_number")}
          className="w-full rounded-lg border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.phone_number?.message}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block font-medium">
            Country
          </label>

          <input
            {...register("country")}
            className="w-full rounded-lg border p-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.country?.message}
          </p>
        </div>

        <div>
          <label className="mb-1 block font-medium">
            State / Province
          </label>

          <input
            {...register("state")}
            className="w-full rounded-lg border p-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.state?.message}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block font-medium">
            City
          </label>

          <input
            {...register("city")}
            className="w-full rounded-lg border p-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.city?.message}
          </p>
        </div>

        <div>
          <label className="mb-1 block font-medium">
            Postal Code
          </label>

          <input
            {...register("postal_code")}
            className="w-full rounded-lg border p-3"
          />

          <p className="mt-1 text-sm text-red-500">
            {errors.postal_code?.message}
          </p>
        </div>
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Address Line 1
        </label>

        <input
          {...register("address_line_1")}
          className="w-full rounded-lg border p-3"
        />

        <p className="mt-1 text-sm text-red-500">
          {errors.address_line_1?.message}
        </p>
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Address Line 2
        </label>

        <input
          {...register("address_line_2")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Landmark
        </label>

        <input
          {...register("landmark")}
          className="w-full rounded-lg border p-3"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-black py-3 text-white transition hover:opacity-90 disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : initialData
          ? "Update Address"
          : "Add Address"}
      </button>
    </form>
  );
}