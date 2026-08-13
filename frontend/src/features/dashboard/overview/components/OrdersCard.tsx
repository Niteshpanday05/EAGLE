"use client";


import PieChart from "@/components/charts/PieChart";


import {
    OrderStatus,
} from "../types";



interface Props {

    data: OrderStatus[];

}



export default function OrdersCard({

    data,

}: Props) {


    return (

        <PieChart

            title="Order Status"

            subtitle="Order distribution"

            data={data}

            nameKey="status"

            valueKey="total"

        />

    );

}