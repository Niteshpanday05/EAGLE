import { ReactNode } from "react";

import ChartCard from "./ChartCard";
import ChartEmpty from "./ChartEmpty";
import ChartLoading from "./ChartLoading";

interface Props {

    title: string;

    subtitle?: string;

    loading?: boolean;

    hasData: boolean;

    children: ReactNode;
}

export default function ChartContainer({

    title,

    subtitle,

    loading = false,

    hasData,

    children,

}: Props) {

    return (

        <ChartCard
            title={title}
            subtitle={subtitle}
        >

            {loading ? (

                <ChartLoading />

            ) : hasData ? (

                children

            ) : (

                <ChartEmpty />

            )}

        </ChartCard>

    );

}