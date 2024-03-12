import { Link } from "react-router-dom";

const Heading = (props) => {
  const { heading, button, link } = props;
  return (
    <div className="mx-7 mt-6">
      <h1 className="text-3xl inline-block pb-3 text-slate-600 hover:scale-110 transform-origin-center transition-transform">{heading}</h1>
      {button && (
        <div className="text-right">
          <Link to={link}>
            <button
              type="button"
              className="bg-gradient-to-r rounded-md from-blue-800 to-blue-500 text-white px-4 py-2 shadow-2xl text-lg mb-3 cursor-pointer hover:scale-105 transform-origin-center transition-transform"
            >
              {button}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Heading;
