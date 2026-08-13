import api from "@/lib/axios";
import {
    DashboardOverview
} from "./types";



export const overviewApi = {


    getOverview:async()=>{


        const response =
            await api.get<DashboardOverview>(
                "/dashboard/overview/"
            );


        return response.data;


    }


};