import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MenuSideItem = (props) => {
  const { item, active, handleChange } = props;
  const { label, icon, subItems, link } = item;

  return (
    <>
      <div className="row flex flex-wrap gap-4 m-6  mb-1 hover:scale-105 transform-origin-center transition-transform" onClick={handleChange}>
          <Link to={link ? link : ""}><FontAwesomeIcon icon={icon} size="lg" style={{ color: "#c084fc" }} />
          <h2 className="text-purple-400 font-semibold">{label}</h2>
          </Link>
        </div>
        {active && (
          <ul data-aos="fade-down" className="ml-14">
            {subItems && subItems.map((item,i) => (
              <Link key={i} to={item.link}><li className="py-1 hover:scale-105 transform-origin-center transition-transform">{item.itemName}</li></Link>
            ))}
          </ul>
        )}
    </>
  );
};
export default MenuSideItem;
