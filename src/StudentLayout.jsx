// import React from 'react';
// import StudentNavLayout from './StudentDashboard/NavBar/StudentNavLayout';
// import StudentSideBarLayout from './StudentDashboard/SideBar/StudentSideBarLayout';

// function StudentLayout() {
//   const layoutStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100vh',
//     fontFamily: 'sans-serif',
//   };

//   const navbarStyle = {
//     height: '60px',
//     backgroundColor: '#d9e3f0',
//     padding: '15px',
//     fontWeight: 'bold',
//     display: 'flex',
//     alignItems: 'center',
//     borderBottom: '2px solid #c0c0c0',
//     marginLeft: '240px', // space for sidebar
//   };

//   const contentStyle = {
//     display: 'flex',
//     flex: 1,
//     marginLeft: '240px', // match Drawer width
//   };

//   const mainBodyStyle = {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: '20px',
//     overflowY: 'auto',
//   };

//   return (
//     <div style={layoutStyle}>
//       {/* Sidebar rendered here */}
//       <StudentSideBarLayout />

//       <div style={navbarStyle}>
//         <StudentNavLayout />
//       </div>

//       <div style={contentStyle}>
//         <div style={mainBodyStyle}>
//           This is main body
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentLayout;


import React from 'react';
import StudentNavLayout from './StudentDashboard/NavBar/StudentNavLayout';
import { borderBottom, borderRight } from '@mui/system';
import StudentSideBarLayout from './StudentDashboard/SideBar/StudentSideBarLayout';
import StudentMain from './StudentDashboard/Main/StudentMain';

function StudentLayout() {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'sans-serif',
  };

  const navbarStyle = {
    height: '60px',
    backgroundColor: '#d9e3f0',
    padding: '15px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #c0c0c0', // line after navbar
  };

  const contentStyle = {
    display: 'flex',
    flex: 1,
  };

  const sidebarStyle = {
    width: '220px',
    backgroundColor: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    borderRight:' 2px solid #c0c0c0', // line after sidebar
  };

  const mainBodyStyle = {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: '20px',
    overflowY: 'auto',
  };

  return (
    <div style={layoutStyle}>
      <div style={navbarStyle}>
        <StudentNavLayout />
      </div>

      <div style={contentStyle}>
        <div style={sidebarStyle}>
          <StudentSideBarLayout />
        </div>

        <div style={mainBodyStyle}>
          
  <StudentMain/>


          
        </div>
      </div>
    </div>
  );
}

export default StudentLayout;  