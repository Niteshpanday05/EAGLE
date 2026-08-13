"use client";


import {
    useQuery
} from "@tanstack/react-query";


import {
    overviewApi
} from "./api";



export function useDashboardOverview(){


    return useQuery({

        queryKey:[
            "dashboard-overview"
        ],


        queryFn:
            overviewApi.getOverview


    });


}