import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import NavBarDown from './NavBarDown';

function AppLayout() {
  return (
    <>
      {' '}
      <div className="min-h-screen grid h-lvh smTablet:grid-cols-[15rem_1fr]  xsTablet:grid-cols-[10rem_1fr] grid-rows-[auto_1fr]">
        <Sidebar></Sidebar>
        <Header></Header>
        <main className="overflow-y-auto bg-[var(--color-bg-main)]">
          <Outlet></Outlet>
        </main>
      </div>
      <NavBarDown></NavBarDown>
    </>
  );
}

export default AppLayout;
