"use client";


import OverviewCards from "./OverviewCards";

import RevenueChart from "./RevenueChart";

import OrdersCard from "./OrdersCard";

import RecentCustomerCard from "./RecentCustomerCard";


import {
    useDashboardOverview
} from "../hooks";



export default function OverviewPage() {


    const {
        data,
        isLoading,
        isError,
    } = useDashboardOverview();



    if (isLoading) {

        return (

            <div className="
                flex
                h-[70vh]
                items-center
                justify-center
            ">

                Loading...

            </div>

        );

    }



    if (isError || !data) {

        return (

            <div className="
                flex
                h-[70vh]
                items-center
                justify-center
                text-red-500
            ">

                Failed to load dashboard.

            </div>

        );

    }



    return (

        <div className="space-y-8">


            {/* Header */}

            <div>

                <h1 className="text-3xl font-bold">
                    Dashboard Overview
                </h1>


                <p className="mt-2 text-gray-500">
                    Welcome back, Administrator.
                </p>


            </div>



            {/* Statistics */}

            <OverviewCards

                overview={data}

            />



            {/* Charts */}

            <div className="
                grid
                grid-cols-1
                gap-6
                xl:grid-cols-2
            ">


                <RevenueChart

                    data={
                        data.daily_revenue
                    }

                />



                <OrdersCard

                    data={
                        data.order_status
                    }

                />


            </div>



            {/* Recent Customers */}

            <RecentCustomerCard
            data={data.recent_customers}
            
            />


        </div>

    );

}