"use client";

import {
  DollarSign,
  Package,
  ShoppingCart,
  Clock3,
  CheckCircle2,
  Users,
} from "lucide-react";


import StatsCard from "./StatsCard";


import { DashboardOverview } from "../types";


interface Props {

  overview: DashboardOverview;

}



export default function OverviewCards({

  overview,

}: Props) {


  const formatNumber = (
    value:number
  ) => {

    return new Intl.NumberFormat(
      "en-US"
    ).format(value);

  };



  return (

    <div className="
      grid
      gap-6
      md:grid-cols-2
      xl:grid-cols-3
    ">


      <StatsCard

        title="Revenue"

        value={`NPR ${overview.total_revenue}`}

        icon={
          <DollarSign size={22}/>
        }

      />



      <StatsCard

        title="Orders"

        value={
          formatNumber(
            overview.total_orders
          )
        }

        icon={
          <ShoppingCart size={22}/>
        }

      />



      <StatsCard

        title="Pending Orders"

        value={
          formatNumber(
            overview.pending_orders
          )
        }

        icon={
          <Clock3 size={22}/>
        }

      />



      <StatsCard

        title="Completed Orders"

        value={
          formatNumber(
            overview.completed_orders
          )
        }

        icon={
          <CheckCircle2 size={22}/>
        }

      />



      <StatsCard

        title="Products"

        value={
          formatNumber(
            overview.total_products
          )
        }

        icon={
          <Package size={22}/>
        }

      />



      <StatsCard

        title="Customers"

        value={
          formatNumber(
            overview.total_customers
          )
        }

        icon={
          <Users size={22}/>
        }

      />


    </div>

  );

}