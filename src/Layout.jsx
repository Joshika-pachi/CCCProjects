import React from 'react';
import SideBarLayout from './SideBar/SideBarLayout';
import NavLayout from './NavBar/NavLayout';
import FiltersBarLayout from './FiltersBar/FiltersNavBar';
import CardCall from './Cards/CardCall';

function Layout() {
  return (
    <div className="app-layout" style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <NavLayout />
      <div style={{ display: 'flex', flexGrow: 1, height: 'calc(100vh - 64px)', marginTop: '64px' }}>
        <div style={{ width: '250px', backgroundColor: '#fff' }}>
          <SideBarLayout />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: '80px', flexShrink: 0 }}>
            <FiltersBarLayout />
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
            <CardCall />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

