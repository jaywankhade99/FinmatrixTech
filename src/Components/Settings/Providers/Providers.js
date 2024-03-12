import { useEffect, useState } from "react";
import Heading from "../../commonComps/Heading";
import Table from "../../commonComps/Table";
import { getProviders } from "../../APIs/settingsApi";
import { dataFormater } from "../../commonComps/DataFormater";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../commonComps/Spinner";
import { setProviderData } from "../../../Slices/settingsSlice";

const Providers = () => {
  const token = useSelector((state) => state.auth.token);
  const { pData, pCols } = useSelector(
    (state) => state.settingOption.getProvider
  );
  const [providerData, setproviderData] = useState(pData);
  const [hRows, setHRows] = useState(pCols);
  const dispatch = useDispatch();

  useEffect(() => {
   getProvidersData();
  }, [pData?.length]);

  const getProvidersData = async () => {
    console.log("api called")
    const data = await getProviders(token);
    data &&
      (() => {
        const reqData = dataFormater(data.result);
        setHRows(data.result.cols);
        setproviderData(reqData);
        dispatch(setProviderData({ data: reqData, cols: data.result.cols }));
      })();
  };

  return (
    <>
      <Heading
        heading="Providers"
        button="Add New Provider"
        link="/providers/new"
      />
      {providerData ? <Table hRow={hRows} data={providerData} /> : <Spinner />}
    </>
  );
};
export default Providers;
