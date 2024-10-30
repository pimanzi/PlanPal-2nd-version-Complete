import Logo from './Logo';
import Navbar from './Navbar';

export default function Sidebar() {
  return (
    <div className=" hidden row-span-2  xsTablet:grid  grid-rows-[10rem,1fr] gap-6  bg-[var(--color-grey-0)]">
      <Logo></Logo>
      <Navbar></Navbar>
    </div>
  );
}
