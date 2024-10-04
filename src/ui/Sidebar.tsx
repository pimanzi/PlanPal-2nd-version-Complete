import Logo from "./Logo";
import Navbar from "./Navbar";

function Sidebar() {
  return (
    <div className="row-span-2 grid grid-rows-[10rem_1fr] gap-6">
      <Logo></Logo>
      <Navbar></Navbar>
    </div>
  );
}

export default Sidebar;
