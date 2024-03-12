import { indianStates } from "../commonComps/Constants";
import { useState } from "react";

const Mobile = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [rechargeDetails, setRechargeDetails] = useState({
    rechargeNumber: "",
    serviceProvider: "",
    circle: "",
    amount: "",
    accountNumber:"",
  });

  const { rechargeNumber, serviceProvider, circle, amount, accountNumber } = rechargeDetails;
  return (
    <>
      <div className="mx-3 my-4 rounded-lg shadow-md">
        <div className="grid grid-cols-3 gap-4 bg-sky-400 rounded-t-md text-center cursor-pointer p-2">
          <div
            onClick={() => setTabIndex(0)}
            className={
              tabIndex === 0 ? "bg-sky-600 border rounded-md border-white py-3" : "py-3"
            }
          >
            Prepaid
          </div>
          <div
            onClick={() => setTabIndex(1)}
            className={
              tabIndex === 1 ? "bg-sky-600 border rounded-md border-white py-3" : "py-3"
            }
          >
            Postpaid
          </div>
          <div
            onClick={() => setTabIndex(2)}
            className={
              tabIndex === 2 ? "bg-sky-600 border rounded-md border-white py-3" : "py-3"
            }
          >
            LandLine
          </div>
        </div>
        <div>
          <div className="bg-white">
            <div className="">
              {/* //line 1 */}
              <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="prepaid-number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {tabIndex === 0
                      ? "Prepaid Number"
                      : tabIndex === 1
                      ? "Postpaid Number"
                      : "Landline Number"}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="prepaid-number"
                      id="prepaid-number"
                      placeholder="  Enter 10 digit prepaid number"
                      required={true}
                      value={rechargeNumber}
                      onChange={(e) => {
                        setRechargeDetails({
                          ...rechargeDetails,
                          rechanrgeNumber: e.target.value,
                        });
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="provider"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Service Provider
                  </label>
                  <div className="mt-2">
                    <select
                      id="provider"
                      name="provider"
                      value={serviceProvider}
                      required
                      onChange={(e) =>
                        setRechargeDetails({
                          ...rechargeDetails,
                          serviceProvider: e.target.value,
                        })
                      }
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Airtel</option>
                      <option>VI</option>
                      <option>JIO</option>
                      <option>BSNL Special Tarrif</option>
                      <option>BSNL Talk Time</option>
                    </select>
                  </div>
                </div>

              { tabIndex ===2 && <div className="sm:col-span-1">
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
                        setRechargeDetails({
                          ...rechargeDetails,
                          accountNumber: e.target.value,
                        })
                      }
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>}

                <div className="sm:col-span-1">
                  <label
                    htmlFor="circle"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Service Circle
                  </label>
                  <div className="mt-2">
                    <select
                      id="circle"
                      name="circle"
                      value={circle}
                      required
                      onChange={(e) =>
                        setRechargeDetails({
                          ...rechargeDetails,
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
                      value={amount}
                      onChange={(e) =>
                        setRechargeDetails({
                          ...rechargeDetails,
                          amount: e.target.value,
                        })
                      }
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Mobile;
