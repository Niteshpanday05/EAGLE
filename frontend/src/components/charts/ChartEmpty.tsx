interface Props {
    message?: string;
}

export default function ChartEmpty({
    message = "No data available.",
}: Props) {
    return (
        <div className="flex h-full items-center justify-center">

            <div className="text-center">

                <h3 className="text-lg font-semibold">
                    No Data
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                    {message}
                </p>

            </div>

        </div>
    );
}