import { useState } from "react";

const MoneyTransfer = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  return (
    <>
      <div className="mx-3 my-4 rounded-lg shadow-md">
        <div className="grid  gap-4 bg-sky-400 rounded-t-md text-center cursor-pointer p-2">
          <div className="bg-sky-600 border rounded-md border-white py-3">
           Money Transfer
          </div>
        </div>
        <div className="bg-white">
          {/* //line 1 */}
          <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-1">
              <label
                htmlFor="mobile-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile Number
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="mobile-number"
                  id="mobile-number"
                  placeholder="  Enter 10 digit prepaid number"
                  required={true}
                  value={mobileNumber}
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                  }}
                  className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
            <button className=" sm:col-span-1 block text-sm font-medium leading-6 text-white bg-sky-400 hover:bg-sky-500 rounded-md py-2">
             Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyTransfer;
