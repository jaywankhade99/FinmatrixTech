import { useDispatch, useSelector } from "react-redux";
import Heading from "../../commonComps/Heading";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addApiProviderCodeAction } from "../../../Slices/settingsSlice";

const ApiProviderCodes = () => {
  const [service, setService] = useState("All Services");
  const [providerCode, setProviderCode] = useState({ provider: [] });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const providers = useSelector(
    (state) => state.settingOption.getProvider.pData
  );
  const { id, name, active } = useParams();

  const providersData =
    providers &&
    (service === "All Services"
      ? providers
      : providers.filter((item, i) => item.Service === service));
  const providersName =
    providersData &&
    providersData.map((provider, i) => ({
      id: provider.id,
      name: provider["Provider Name"],
    }));

  const handleProviderCode = (pid, labelName, code) => {
    setProviderCode(prevProviderCode => {
      const existingProviderIndex = prevProviderCode.provider.findIndex(provider => provider.id === pid);
      if (existingProviderIndex !== -1) {
        // Update the code if the id already exists
        const updatedProvider = [...prevProviderCode.provider];
        updatedProvider[existingProviderIndex] = { id: pid, name: labelName, code: code };
        return { ...prevProviderCode, provider: updatedProvider };
      } else {
        // Create a new object if the id is different
        return { ...prevProviderCode, provider: [...prevProviderCode.provider, { id: pid, name: labelName, code: code }] };
      }
    });
  };

  const handleAddApiProviderCode = (e)=>{
    let data ={
      data:{api:{id:id, name: name},
      isActive: active==="Active",
      provider: providerCode.provider}
    }
   dispatch(addApiProviderCodeAction(data))

  }
 
  return (
    <div>
      <Heading heading={`${name} Api Provider Codes`} />
      <div>
        <div className="border-b border-gray-900/10">
          <div className="mt-10 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label
                htmlFor="services"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Services
              </label>
              <div className="mt-2">
                <select
                  id="services"
                  name="services"
                  required
                  onChange={(e) => setService(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>All Services</option>
                  {providers &&
                    providers.map((item, i) => (
                      <option key={i}>{item.Service}</option>
                    ))}
                </select>
              </div>
            </div>

          </div>
          {/* //line 1  Provider headings*/}
          <div className="mt-10 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            {providersName &&
              providersName.map((p, i) => (
                <div key={i} className="sm:col-span-1">
                  <label
                    htmlFor="api-type"
                    className="block text-lg font-medium leading-6 text-gray-500"
                  >
                    {p.name}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="status-check-url"
                      id="status-check-url"
                      placeholder="  Provide Code"
                      onChange={(e) =>
                       handleProviderCode(p.id, p.name, e.target.value)
                      }
                      className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-6 grid grid-cols-1 items-center gap-x-6">
            <div className="flex px-16 justify-between">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-sm font-semibold leading-6 rounded-md hover:bg-slate-400 bg-slate-300 text-gray-900 w-full max-w-60"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAddApiProviderCode()}
                disabled={!(providersName?.length === providerCode.provider?.length)}
                className=" w-full max-w-60 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApiProviderCodes;
