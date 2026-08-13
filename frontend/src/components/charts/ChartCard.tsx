import { ReactNode } from "react";

interface Props {
    title: string;
    subtitle?: string;
    children: ReactNode;
}

export default function ChartCard({
    title,
    subtitle,
    children,
}: Props) {
    return (
        <div className="rounded-xl border bg-white shadow-sm">

            <div className="border-b p-5">

                <h2 className="text-lg font-semibold">
                    {title}
                </h2>

                {subtitle && (
                    <p className="mt-1 text-sm text-gray-500">
                        {subtitle}
                    </p>
                )}

            </div>

            <div className="h-96 p-5">
                {children}
            </div>

        </div>
    );
}