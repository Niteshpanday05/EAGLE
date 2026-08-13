import { Address } from "../types";
import AddressCard from "./AddressCard";
import EmptyAddress from "./EmptyAddress";

interface AddressListProps {
  addresses: Address[];
  onEdit: (address: Address) => void;
  onDelete: (id: number) => void;
  onSetDefault: (id: number) => void;
}

export default function AddressList({
  addresses,
  onEdit,
  onDelete,
  onSetDefault,
}: AddressListProps) {
  if (!addresses.length) {
    return <EmptyAddress />;
  }

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          onEdit={onEdit}
          onDelete={onDelete}
          onSetDefault={onSetDefault}
        />
      ))}
    </div>
  );
}