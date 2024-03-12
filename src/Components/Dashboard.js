import React from "react";
import Card from "./commonComps/Card";
import { useSelector } from "react-redux";

const Dashboard =()=>{

    const cardDetails = useSelector((store)=>store.dashboardData.data[0])
    console.log(cardDetails)

    return(
        <div className=" w-full h-full">
            <h1>This is Dashboard Component</h1>
            <div className="flex flex-wrap">
            {cardDetails?.map((item,i)=><Card key={item._id} item={item}/>)}
            </div>
        </div>
    )
}

export default Dashboard;