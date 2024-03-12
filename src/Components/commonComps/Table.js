import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faListCheck,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Table = ({
  hRow = [
    "S.NO",
    "Username",
    "User Type",
    "Parent",
    "Balance",
    "Location",
    "User Pin",
    "Status",
    "Action",
  ],
  data,
  Action,
}) => {
  const actionIcons = [
    { name: faListCheck, to: "" },
    { name: faPlug, to: "/apis/pcodes" },
    { name: faGlobe, to: "/apis/ccodes" },
  ];

  return (
    <div className="p-9 bg-white shadow-xl">
      <table className="table-auto border w-full border-slate-700 ">
        <thead data-aos="fade-in">
          <tr className="border border-slate-100 border-spacing-2 bg-blue-800 bg-opacity-90">
            <th className="border border-slate-500 px-3 py-3 text-white text-xl text-left">
              S.No
            </th>
            {hRow?.map((item, i) => (
              <th
                key={i}
                className="border border-slate-500 px-3 py-3 text-white text-xl text-left"
              >
                {item}
              </th>
            ))}
            {Action && (
              <th className="border border-slate-500 px-3 py-3 text-white text-xl text-left">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody >
          {data?.map((item, index) => (
            <tr
            data-aos="slide-up"
              key={index}
              className="border border-slate-100 border-spacing-2"
            >
              <td key={index} className="border border-slate-400 p-4">
                {index + 1}
              </td>
              {Object.keys(item).map((key, i) => (
                <td key={key} className="border border-slate-400 p-4">
                  {item[key]}
                </td>
              ))}
              {Action && (
                <td className="border border-slate-400 p-4">
                  {actionIcons.map((icon) => (
                    <span className="px-1 cursor-pointer">
                      <Link
                        to={`${icon.to}/${item.id}/${item.Name}/${item.Active}`}
                      >
                        <FontAwesomeIcon
                          icon={icon.name}
                          size="lg"
                          style={{ color: "#1e40af" }}
                        />
                      </Link>
                    </span>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
