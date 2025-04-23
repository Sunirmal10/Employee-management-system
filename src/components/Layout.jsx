import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';
import BottomBar from './BottomBar';
import MobileBar from './MobileBar';


const Layout = () => {
 const [showSidebar, setShowSidebar] = useState(true)
  return (
    <div className='flex flex-col md:flex-row'>
      {/* { showMobileBar ? <MobileBar/> : <Sidebar />} */}
      <MobileBar/> {/* hide on width >= 425px */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className={`transition-all duration-500 ease-in-out ${showSidebar ? 'md:ml-56' : 'md:ml-12'}`} >
        <Outlet />
      </main>
      {/* { showMobileBar && <BottomBar/> } */}
      <BottomBar/> {/* hide on width >= 425px */}
    </div>
  );
};

export default Layout;
