import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Address",
    value: "Kathmandu, Nepal",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 98XXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@sajiloorder.com",
  },
];

export default function FooterContact() {
  return (
    <div>
      <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-950">
        Contact
      </h3>

      <div className="mt-5 space-y-4 sm:mt-6">

        {CONTACT_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex gap-3"
            >
              <Icon
                className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400"
                strokeWidth={1.7}
              />

              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                  {item.label}
                </p>

                <p className="mt-1 break-words text-sm text-neutral-600">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}