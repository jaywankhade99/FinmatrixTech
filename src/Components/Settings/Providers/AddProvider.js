import { useState } from "react";
import { indianStates } from "../../commonComps/Constants";
import Heading from "../../commonComps/Heading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProviderAction } from "../../../Slices/settingsSlice";

const AddProvider = () => {
  const [providerDetails, setProviderDetails] = useState({
    providerName: "",
    serviceName: "",
    api: "",
    backupApi: "",
    status: "Active" ? true : false,
    state: "",
    logo: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddProvider = (e) => {
    e.preventDefault();
    dispatch(addProviderAction(providerDetails));
  };
  const { providerName, serviceName, api, backupApi, status, state, logo } =
    providerDetails;
  return (
    <>
      <div>
        <Heading heading="Provider Details" />
        <div className="border-b border-gray-900/10">
          {/* //line 1 */}
          <div className="mt-10 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <label
                htmlFor="provider-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provider Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="api-name"
                  id="api-name"
                  value={providerName}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      providerName: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {/* Line 2 */}
          <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <label
                htmlFor="service-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="service-name"
                  id="service-name"
                  value={serviceName}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      serviceName: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {/* Line 3 */}
          <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <label
                htmlFor="api"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Api
              </label>
              <div className="mt-2">
                <select
                  id="api"
                  name="api"
                  value={api}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      api: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>None</option>
                  <option>EZYTM PLAN API</option>
                  <option>MobiKwik</option>
                  <option>Patilpe test</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="backup-api"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Backup Api
              </label>
              <div className="mt-2">
                <select
                  id="backup-api"
                  name="backup-api"
                  value={backupApi}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      backupApi: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>None</option>
                  <option>EZYTM PLAN API</option>
                  <option>MobiKwik</option>
                  <option>Patilpe test</option>
                </select>
              </div>
            </div>
          </div>

          {/* Line 4 */}
          <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <label
                htmlFor="api-domain"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
              </label>
              <div className="mt-2">
                <select
                  id="state"
                  name="state"
                  value={state}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      state: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {indianStates.map((state, i) => (
                    <option key={i}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Status
              </label>
              <div className="mt-2">
                <select
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      status: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Active</option>
                  <option>Blocked</option>
                </select>
              </div>
            </div>
          </div>

          {/* Line 5 */}
          <div className="grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-2">
              <label
                htmlFor="logo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provider Logo
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="logo"
                  id="logo"
                  value={logo}
                  onChange={(e) =>
                    setProviderDetails({
                      ...providerDetails,
                      logo: e.target.value,
                    })
                  }
                  className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Line 6 */}
        <div className="mt-6 grid grid-cols-1 items-center gap-x-6 sm:grid-cols-8 ">
          <div className="sm:col-span-4 flex px-4 justify-between">
            <button
              type="button"
              className="text-sm  col-span-1 font-semibold leading-6 text-gray-900"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              className="col-span-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-30"
              disabled={!(serviceName)}
              onClick={(e)=>handleAddProvider(e)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProvider;
