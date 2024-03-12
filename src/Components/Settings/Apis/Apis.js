import { useSelector } from "react-redux";
import { getApis } from "../../APIs/settingsApi";
import Heading from "../../commonComps/Heading";
import Table from "../../commonComps/Table";
import { useEffect, useState } from "react";
import Spinner from "../../commonComps/Spinner";
import {dataFormater } from "../../commonComps/DataFormater";


const Apis = () => {
  const [apiData, setApiData] = useState(null);
  const [hRows, setHRows] = useState(null);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getApiData();
  }, [apiData?.length]);

  const getApiData = async () => {
    const data = await getApis(token);
    const reqData = dataFormater(data?.result);
    setHRows(data.result.cols);
    setApiData(reqData);
  };
  return (
    <div>
      <Heading heading="APIs" button="Add New Api" link="/apis/new"/>
      {apiData ? <Table data={apiData} hRow={hRows} Action /> : <Spinner />}
    </div>
  );
};
export default Apis;
