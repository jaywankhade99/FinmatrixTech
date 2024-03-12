import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../commonComps/Heading";
import { indianStates } from "../../commonComps/Constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addApiCircleCodeAction } from "../../../Slices/settingsSlice";

const ApiCircleCodes = () => {
  const [circleCodes, setCircleCodes] = useState({ circle: [] });
  const { id, name, active } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const circleList = indianStates;

  const handleCircleCode = (cid, labelName, code) => {
    setCircleCodes((prevCircleCodes) => {
      let existingProviderIndex = prevCircleCodes.circle.findIndex(
        (circle) => circle.id === cid
      );
      if (existingProviderIndex !== -1) {
        let reqCircleCode = [...prevCircleCodes.circle];
        reqCircleCode[existingProviderIndex] = {
          id: cid,
          name: labelName,
          code: code,
        };
        return { ...prevCircleCodes, circle: reqCircleCode };
      } else {
        return {
          ...prevCircleCodes,
          circle: [
            ...prevCircleCodes.circle,
            { id: cid, name: labelName, code: code },
          ],
        };
      }
    });
  };

  const handleAddApiCircleCode = () => {
    let data = {
      data: {
        api: { id: id, name: name },
        isActive: active === "Active",
        circle: circleCodes.circle,
      },
    };
    dispatch(addApiCircleCodeAction(data));
  };

  return (
    <>
      <Heading heading={`${name} Circle Codes`} />
      <div>
        <div className="border-b border-gray-900/10">
          {/* //line 1  Provider headings*/}
          <div className="mt-10 grid grid-cols-1 px-6 py-3 gap-x-6 gap-y-8 sm:grid-cols-2">
            {circleList &&
              circleList.map((circle, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  className="sm:col-span-1 grid grid-cols-1 sm:grid-cols-2 px-6"
                >
                  <label
                    htmlFor="circle"
                    className="block text-lg font-medium leading-6 text-gray-500"
                  >
                    {circle}
                  </label>
                  <input
                    type="text"
                    name="circle-code"
                    id="circle-code"
                    placeholder="  Circle Code"
                    onChange={(e) =>
                      handleCircleCode(i, circle, e.target.value)
                    }
                    className="block  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-1 sm:mt-0"
                  />
                </div>
              ))}
          </div>
          <div data-aos="fade-up" className="mt-6 grid grid-cols-1 items-center gap-x-6">
            <div className="flex px-16 justify-between">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-sm font-semibold leading-6 rounded-md hover:bg-slate-400 bg-slate-300 text-gray-900 w-full max-w-60 hover:scale-110 transform-origin-center transition-transform"
              >
                Cancel
              </button>
              <button
                onClick={() => handleAddApiCircleCode()}
                disabled={!circleCodes.circle.length}
                className=" w-full max-w-60 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 hover:scale-110 transform-origin-center transition-transform"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiCircleCodes;
