export interface DailyRevenue {

    day:string;

    revenue:number;

}



export interface OrderStatus {

    status:string;

    total:number;

}



export interface DashboardOverview {


    total_products:number;

    total_customers:number;

    total_orders:number;

    pending_orders:number;

    completed_orders:number;

    total_revenue:string;


    daily_revenue:DailyRevenue[];


    order_status:OrderStatus[];

    recent_customers:RecentCustomer[];

}

export interface RecentCustomer {

    id:number;

    name:string;

    email:string;

    joined_at:string;

}