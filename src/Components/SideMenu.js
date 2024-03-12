import React, { useState } from "react";
import MenuSideItem from "./commonComps/MenuSideItem";
import {
  faUsers,
  faCartPlus,
  faRectangleList,
  faFile,
  faGears,
  faBell,
  faEnvelope,
  faMobileButton,
  faCreditCard,
 faSatelliteDish,
 faLightbulb,
 faIndianRupeeSign,
 faHandHoldingDollar,
 faWallet,
 faList
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
const isAdmin = useSelector(state=>state.auth.isAdmin);
  const handleChange = (i) => {
    activeMenu !== i ? setActiveMenu(i) : setActiveMenu(null);
  };
  const sideMenus = !isAdmin ? 
  [
    {
      label: "Members",
      icon: faUsers,
      subItems: [
        { itemName: "Member List", link: "member" },
        { itemName: "Add Member" },
        { itemName: "Master Distributor" },
        { itemName: "Distributos" },
        { itemName: "Retailers" },
        { itemName: "Api Users" },
      ],
    },
    {
      label: "Money Request",
      icon: faCartPlus,
      subItems: [
        { itemName: "Pending Request" },
        { itemName: "Reject Request" },
        { itemName: "Approved Request" },
      ],
    },
    {
      label: "History",
      icon: faRectangleList,
      subItems: [
        { itemName: "Recharge" },
        { itemName: "All History" },
        { itemName: "Wallet History" },
        { itemName: "Admin Fund Transfer" },
        { itemName: "Disputes" },
      ],
    },
    {
      label: "Reports",
      icon: faFile,
      subItems: [
        { itemName: "Live Reports" },
        { itemName: "Txn Wise" },
        { itemName: "Topup Wise" },
        { itemName: "User Wise" },
        { itemName: "Operator Wise" },
        { itemName: "Api Wise" },
        { itemName: "Complain History" },
        { itemName: "New User" },
      ],
    },
    {
      label: "Settings",
      icon: faGears,
      subItems: [
        { itemName: "Services", link:"/services" },
        { itemName: "Providers" ,link:"/providers" },
        { itemName: "API(s)", link:"/apis" },
        { itemName: "User Plans" },
        { itemName: "DMR Commision" },
        { itemName: "Payment Options" },
        { itemName: "Website Setting" },
        { itemName: "UPI Setting" },
        { itemName: "Benner Setting" },
      ],
    },
    {
      label: "Notice Board",
      icon: faBell,
      subItems: [
        { itemName: "Notice Board" }, 
        { itemName: "Notifications" }
      ]
    },
    {
      label: "Sent SMS",
      icon: faEnvelope,
      subItems: [],
    },
  ] : [
    {
      label: "Mobile",
      icon: faMobileButton,
      link:"user/Mobile"
    }, {
      label: "Credit Card",
      icon: faCreditCard,
      link:"user/CreditCard"
    }, {
      label: "DTH",
      icon: faSatelliteDish,
      link:"user/DTH"
    }, {
      label: "Utilities",
      icon: faLightbulb,
      link:"user/Utilities"
    }, {
      label: "Money Transfer",
      icon: faIndianRupeeSign,
      link:"user/MoneyTransfer"
    }, {
      label: "Request Money",
      icon: faHandHoldingDollar,
    }, {
      label: "History",
      icon: faList,
    }, {
      label: "Disputes",
      icon: faGears,
    }, {
      label: "Wallet History",
      icon: faWallet,
    }, {
      label: "Lodger",
      icon: faRectangleList,
    },
  ];
  return (
    <>
      <div className="sm:fixed w-14 h-screen sm:w-52 cursor-pointer shadow-xl mr-2 flex-none">
        {sideMenus.map((item, i) => (
          <MenuSideItem
            key={i}
            active={activeMenu === i}
            handleChange={() => handleChange(i)}
            item={item}
          />
        ))}
      </div>
    </>
  );
};
export default SideMenu;
