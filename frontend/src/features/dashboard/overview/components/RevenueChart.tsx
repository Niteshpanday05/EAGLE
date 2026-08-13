"use client";


import LineChart from "@/components/charts/LineChart";


import {
    DailyRevenue,
} from "../types";



interface Props {

    data: DailyRevenue[];

}



export default function RevenueChart({

    data,

}: Props) {


    return (

        <LineChart

            title="Revenue Overview"

            subtitle="Daily revenue performance"

            data={data}

            xKey="day"

            yKey="revenue"


            formatter={(value)=>{

                return `NPR ${value.toLocaleString()}`;

            }}

        />

    );

}