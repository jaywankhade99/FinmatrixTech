import { useEffect, useState } from "react";
import Heading from "../../commonComps/Heading";
import Table from "../../commonComps/Table";
import {dataFormater} from "../../commonComps/DataFormater";
import { useSelector } from "react-redux";
import { getServices } from "../../APIs/settingsApi";
import Spinner from "../../commonComps/Spinner";


const Services = ()=>{

    const [serveData, setServerData] = useState(null);
    const [hRows, setHRows] = useState(null);
    const token = useSelector((state)=>state.auth.token);

    useEffect(()=>{
        servicesList();
    },[serveData?.length])

const servicesList = async()=>{
    const data = await getServices(token);
    const reqData = dataFormater(data?.result);
    setHRows(data.result.cols);
    setServerData(reqData);
}
    return(
        <>
        <Heading heading="Services" button="Add New Service" link="/services/new"/>
        {serveData ?
        <Table hRow={hRows} data={serveData}/> : <Spinner/>}
        </>
    )
}

export default Services;