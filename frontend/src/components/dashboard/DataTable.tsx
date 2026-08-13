import React from "react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

export default function DataTable<T extends Record<string, any>>({
  columns,
  data,
  emptyMessage = "No data available.",
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-50">

            <tr>

              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`px-5 py-3 text-left text-sm font-semibold text-gray-700 ${column.className ?? ""}`}
                >
                  {column.header}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {data.length === 0 ? (
              <tr>

                <td
                  colSpan={columns.length}
                  className="px-5 py-10 text-center text-gray-500"
                >
                  {emptyMessage}
                </td>

              </tr>
            ) : (
              data.map((row, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50"
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className="px-5 py-4"
                    >
                      {column.render
                        ? column.render(row)
                        : row[column.key as keyof T]}
                    </td>
                  ))}
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}