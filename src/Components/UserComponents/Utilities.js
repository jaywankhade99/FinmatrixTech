import { useState } from "react";
import { indianStates } from "../commonComps/Constants";

const Utilities = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [electricityDetails, setElectricityDetails] = useState({
    serviceProvider: "",
    accountNumber: "",
    customerNumber: "",
  });

  const [waterGasDetails, setWaterGasDetails] = useState({
    type: "",
    state: "",
    serviceProvider: "",
    accountNumber: "",
    customerNumber: "",
    amount: "",
    lastDate: "",
  });

  const electricityForm = () => {
    const { serviceProvider, accountNumber, customerNumber } =
      electricityDetails;
    return (
      <>
        <div>
          <div className="bg-white">
            <div className="">
              {/* //line 1 */}
              <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="service-provider"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Service Provider
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="service-provider"
                      id="service-provider"
                      placeholder="  Enter 10 digit prepaid number"
                      required={true}
                      value={serviceProvider}
                      onChange={(e) => {
                        setElectricityDetails({
                          ...electricityDetails,
                          serviceProvider: e.target.value,
                        });
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="account"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Account Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="account"
                      id="account"
                      required
                      placeholder=" Enter account number"
                      value={accountNumber}
                      onChange={(e) =>
                        setElectricityDetails({
                          ...electricityDetails,
                          accountNumber: e.target.value,
                        })
                      }
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="circle"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Customer Number
                  </label>
                  <div className="mt-2">
                    <select
                      id="circle"
                      name="circle"
                      value={customerNumber}
                      required
                      onChange={(e) =>
                        setElectricityDetails({
                          ...electricityDetails,
                          circle: e.target.value,
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
              </div>
              <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                <button className=" sm:col-span-1 block text-sm font-medium leading-6 text-white bg-sky-400 hover:bg-sky-500 rounded-md py-2">
                  Fetch Bill
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const waterOrGasForm = () => {
    const {
      state,
      serviceProvider,
      accountNumber,
      customerNumber,
      amount,
      lastDate,
    } = waterGasDetails;
    return (
      <>
        <div className="">
          {/* //line 1 */}
          <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <label
                htmlFor="state"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select State
              </label>
              <div className="mt-2">
                <select
                  id="state"
                  name="state"
                  value={state}
                  required
                  onChange={(e) =>
                    setWaterGasDetails({
                      ...waterGasDetails,
                      state: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select State</option>
                  {indianStates.map((state, i) => (
                    <option key={i}>{state}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="account-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Account Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="account-number"
                  id="account-number"
                  required
                  placeholder="  Enter Account Number"
                  value={accountNumber}
                  onChange={(e) =>
                    setWaterGasDetails({
                      ...waterGasDetails,
                      accountNumber: e.target.value,
                    })
                  }
                  className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="service-provider"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service Provider
              </label>
              <div className="mt-2">
                <select
                  id="service-provider"
                  name="service-provider"
                  value={serviceProvider}
                  required
                  onChange={(e) =>
                    setWaterGasDetails({
                      ...waterGasDetails,
                      serviceProvider: e.target.value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Service Provider</option>
                  <option>1 month</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="amount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Recharge Amount
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  required
                  placeholder="  Enter Recharge Amount"
                  value={amount}
                  onChange={(e) =>
                    setWaterGasDetails({
                      ...waterGasDetails,
                      amount: e.target.value,
                    })
                  }
                  className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="customer-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Customer Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="customer-number"
                  id="customer-number"
                  placeholder="  Enter Customer Number"
                  required={true}
                  value={customerNumber}
                  onChange={(e) => {
                    setWaterGasDetails({
                      ...waterGasDetails,
                      customerNumber: e.target.value,
                    });
                  }}
                  className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="last-date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Date
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="last-date"
                  id="last-date"
                  placeholder="  Enter Valid date"
                  required={true}
                  value={lastDate}
                  onChange={(e) => {
                    setWaterGasDetails({
                      ...waterGasDetails,
                      lastDate: e.target.value,
                    });
                  }}
                  className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <button className=" sm:col-span-1 block text-sm font-medium leading-6 text-white bg-sky-400 hover:bg-sky-500 rounded-md py-2">
              Recharge Now
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="mx-3 my-4 rounded-lg shadow-md">
      <div className="grid grid-cols-3 gap-4 bg-sky-400 rounded-t-md text-center cursor-pointer p-2">
        <div
          onClick={() => setTabIndex(0)}
          className={
            tabIndex === 0
              ? "bg-sky-600 border rounded-md border-white py-3"
              : "py-3"
          }
        >
          Electricity
        </div>
        <div
          onClick={() => {
            setTabIndex(1);
            setWaterGasDetails({ ...waterGasDetails, type: "water" });
          }}
          className={
            tabIndex === 1
              ? "bg-sky-600 border rounded-md border-white py-3"
              : "py-3"
          }
        >
          Water
        </div>
        <div
          onClick={() => {
            setTabIndex(2);
            setWaterGasDetails({ ...waterGasDetails, type: "gas" });
          }}
          className={
            tabIndex === 2
              ? "bg-sky-600 border rounded-md border-white py-3"
              : "py-3"
          }
        >
          Gas
        </div>
      </div>
      {tabIndex === 0 ? electricityForm() : waterOrGasForm()}
    </div>
  );
};
export default Utilities;
