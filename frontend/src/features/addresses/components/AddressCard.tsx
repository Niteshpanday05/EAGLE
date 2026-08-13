import { Address } from "../types";
import AddressActions from "./AddressActions";

interface AddressCardProps {
  address: Address;
  onEdit: (address: Address) => void;
  onDelete: (id: number) => void;
  onSetDefault: (id: number) => void;
}

export default function AddressCard({
  address,
  onEdit,
  onDelete,
  onSetDefault,
}: AddressCardProps) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">
            {address.full_name}
          </h3>

          <p className="text-sm text-gray-500">
            {address.phone_number}
          </p>

          {address.is_default && (
            <span className="mt-2 inline-block rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
              Default
            </span>
          )}
        </div>

        <AddressActions
          address={address}
          onEdit={onEdit}
          onDelete={onDelete}
          onSetDefault={onSetDefault}
        />
      </div>

      <div className="mt-4 space-y-1 text-sm text-gray-600">
        <p>{address.address_line_1}</p>

        {address.address_line_2 && (
          <p>{address.address_line_2}</p>
        )}

        {address.landmark && (
          <p>{address.landmark}</p>
        )}

        <p>
          {address.city}, {address.state}
        </p>

        <p>{address.country}</p>

        {address.postal_code && (
          <p>{address.postal_code}</p>
        )}
      </div>
    </div>
  );
}