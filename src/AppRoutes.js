import { createBrowserRouter } from "react-router-dom";
import Body from "./Components/Body";
import MemberList from "./Components/Members/MemberList";
import MainPage from "./MainPage";
import Services from "./Components/Settings/Services/Services";
import Error from "./Components/Error";
import AddService from "./Components/Settings/Services/AddService";
import Apis from "./Components/Settings/Apis/Apis";
import AddApi from "./Components/Settings/Apis/AddApi";
import Providers from "./Components/Settings/Providers/Providers";
import AddProvider from "./Components/Settings/Providers/AddProvider";
import ApiProviderCodes from "./Components/Settings/Apis/ApiProviderCodes";
import ApiCircleCodes from "./Components/Settings/Apis/ApiCircleCodes";
import Mobile from "./Components/UserComponents/Mobile";
import CreditCard from "./Components/UserComponents/CreditCard";
import DTH from "./Components/UserComponents/DTH";
import Utilities from "./Components/UserComponents/Utilities";
import MoneyTransfer from "./Components/UserComponents/MoneyTransfer";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    children: [
      ///Admin routes
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "member",
        element: <MemberList />,
      },
      {
        path:"services",
        element: <Services/>
      },
      {
        path:"services/new",
        element:<AddService/>
      },
      {
        path:"providers",
        element:<Providers/>
      },
      {
        path:"providers/new",
        element:<AddProvider/>
      },
      {
        path:"apis",
        element:<Apis/>
      },
      {
        path:"apis/new",
        element:<AddApi/>
      },
      {
        path:"apis/pcodes/:id/:name/:active",
        element:<ApiProviderCodes/>
      },
      {
        path:"apis/ccodes/:id/:name/:active",
        element: <ApiCircleCodes/>
      },


      ///User routes
      {
        path:"/user/mobile",
        element: <Mobile/>
      },
      {
        path:"/user/Creditcard",
        element:<CreditCard/>
      },
      {
        path:"/user/DTH",
        element:<DTH/>
      },
      {
        path:"/user/Utilities",
        element:<Utilities/>
      },
      {
        path:"/user/MoneyTransfer",
        element:<MoneyTransfer/>
      }

      
    ],
    errorElement:<Error/>

  },
]);

export default AppRoutes;
