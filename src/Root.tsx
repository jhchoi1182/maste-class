import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
};

export default Root;
