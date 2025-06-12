// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Toolbar from '@mui/material/Toolbar';
// import Divider from '@mui/material/Divider';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// export default function StudentSideBarLayout() {
//   return (
//     <Drawer
//       sx={{
//         width: drawerWidth,
//         height: 'calc(100% - 64px)',
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: drawerWidth,
//           boxSizing: 'border-box',
//           backgroundColor: '#fddde6', // optional: pink background
//         },
//       }}
//       variant="permanent"
//       anchor="left"
//     >
//       <Toolbar />
      
//       <List>
//         {['Dashboard', 'Courses', 'Profile', 'Settings'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['Logout'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <MailIcon />
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// }  


import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { IoSettings } from "react-icons/io5";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { GrResources } from "react-icons/gr";
import { FaRecordVinyl } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FcPlanner } from "react-icons/fc";

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, fontSize: '1.2rem' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <h3 sx={{textAlign: 'center', backgroundColor: 'transparent', fontWeight: 'bold',color:'black'}}>
          MAIN
        </h3>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <FcPlanner />
        </ListItemIcon>
        <ListItemText primary="My Courses" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FaHome />
        </ListItemIcon>
        <ListItemText primary="Routine" />
      </ListItemButton>
      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Recording" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton> */}
      <ListItemButton>
        <ListItemIcon>
          <FaRecordVinyl />
        </ListItemIcon>
        <ListItemText primary="Recording" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <GrResources />
        </ListItemIcon>
        <ListItemText primary="Resources" />
      </ListItemButton>

        <h3>OTHER</h3> 
        <ListItemButton>
        <ListItemIcon>
          <IoSettings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <HelpOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItemButton>
      



      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
