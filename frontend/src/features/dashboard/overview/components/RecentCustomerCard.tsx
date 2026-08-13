"use client";


import {
    RecentCustomer,
} from "../types";



interface Props {

    data?: RecentCustomer[];

}



export default function RecentCustomerCard({

    data = [],

}: Props) {


    return (

        <div className="
            rounded-2xl
            border
            bg-white
            p-6
            shadow-sm
        ">


            <div className="mb-5">

                <h2 className="
                    text-xl
                    font-semibold
                ">

                    Recent Customers

                </h2>


                <p className="
                    text-sm
                    text-gray-500
                ">

                    Latest registered customers

                </p>


            </div>



            <div className="space-y-4">


                {data.length === 0 && (

                    <p className="
                        text-sm
                        text-gray-500
                    ">

                        No customers found.

                    </p>

                )}



                {data.map((customer)=>(


                    <div

                        key={customer.id}

                        className="
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            border
                            p-4
                        "

                    >


                        <div>


                            <p className="
                                font-medium
                            ">

                                {customer.name}

                            </p>


                            <p className="
                                text-sm
                                text-gray-500
                            ">

                                {customer.email}

                            </p>


                        </div>



                        <div className="
                            text-sm
                            text-gray-500
                        ">

                            {new Date(
                                customer.joined_at
                            ).toLocaleDateString()}


                        </div>


                    </div>


                ))}


            </div>


        </div>

    );

}