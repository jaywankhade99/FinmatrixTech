import { useState } from "react";

const CreditCard = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    amount: "",
  });

  const { cardNumber, amount } = cardDetails;
  return (
    <>
      <div className="mx-3 my-4 rounded-lg shadow-md">
        <div className=" bg-sky-400 rounded-t-md text-center cursor-pointer p-2">
          <div className="bg-sky-600 border rounded-md border-white py-3">Credit Card</div>
        </div>
        <div>
          <div className="bg-white">
            <div className="">
              {/* //line 1 */}
              <div className="pt-6 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-4">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Credit Card Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="card-number"
                      id="card-number"
                      placeholder="  Enter credit card number"
                      required={true}
                      value={cardNumber}
                      onChange={(e) => {
                        setCardDetails({
                          ...cardDetails,
                          cardNumber: e.target.value,
                        });
                      }}
                      className="block sm:max-w-xs w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Amount
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      required
                      value={amount}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
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
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCard;
