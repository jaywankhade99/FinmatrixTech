import { useSelector } from "react-redux";
import FinMatrix from "./Finmatrix";
import Login from "./Login";

const MainPage = () => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);
  return authenticated ? <FinMatrix /> : <Login />;
};
export default MainPage;
