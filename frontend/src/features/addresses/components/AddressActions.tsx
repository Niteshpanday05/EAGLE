import { Address } from "../types";

interface AddressActionsProps {
  address: Address;
  onEdit: (address: Address) => void;
  onDelete: (id: number) => void;
  onSetDefault: (id: number) => void;
}

export default function AddressActions({
  address,
  onEdit,
  onDelete,
  onSetDefault,
}: AddressActionsProps) {
  return (
    <div className="flex gap-2">
      {!address.is_default && (
        <button
          onClick={() => onSetDefault(address.id)}
          className="text-blue-600 hover:underline"
        >
          Set Default
        </button>
      )}

      <button
        onClick={() => onEdit(address)}
        className="text-yellow-600 hover:underline"
      >
        Edit
      </button>

      <button
        onClick={() => onDelete(address.id)}
        className="text-red-600 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}