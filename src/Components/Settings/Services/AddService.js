import { useState } from "react";
import Heading from "../../commonComps/Heading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../commonComps/Spinner";
import { addServiceProvider } from "../../../Slices/settingsSlice";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const serviceStatus = useSelector(
    (state) => state.settingOption.addService.status
  );

  const handleAddService = (e) => {
    e.preventDefault();
    serviceName && status && dispatch(addServiceProvider(serviceName, status));
    serviceStatus === "fulfilled" && navigate("/services");
  };
  return (
    <>
      {serviceStatus === "pending" ? (
        <Spinner />
      ) : (
        <>
          <Heading heading="Service details" />
          <div>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Service Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          value={serviceName}
                          onChange={(e) => setServiceName(e.target.value)}
                          className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Active</option>
                          <option>Blocked</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-start gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                  disabled={!(serviceName && status)}
                  onClick={(e)=>handleAddService(e)}
                >
                  Save
                </button>
              </div>
          </div>
        </>
      )}
    </>
  );
};
export default AddService;
