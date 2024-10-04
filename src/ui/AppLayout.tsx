import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-lvh grid-cols-[20rem_1fr] grid-rows-[auto_1fr]">
      <Sidebar></Sidebar>
      <Header></Header>
      <main className="bg-custom-light-gray overflow-y-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default AppLayout;
