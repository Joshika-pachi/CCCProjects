// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from '@mui/material';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import Person2Icon from '@mui/icons-material/Person2';
// import SchoolIcon from '@mui/icons-material/School';

// const StudentNavMain = () => {
//   const [role, setRole] = React.useState('');
//   const [skill, setSkill] = React.useState('');

//   const handleRoleChange = (event) => {
//     setRole(event.target.value);
//   };

//   const handleSkillChange = (event) => {
//     setSkill(event.target.value);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: '#d9e3f0',
//         boxShadow: 'none',
//       }}
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//         {/* Left: Logo */}

//         <SchoolIcon />
//         <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
//           Edupro
//         </Typography>

//         {/* Right: Icons and Dropdowns */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <NotificationsNoneOutlinedIcon sx={{ fontSize: 35, color: 'black',marginRight:'40px' }} />
//           <Person2Icon sx={{ fontSize: 30, color: 'black' }} />

//           {/* Role Dropdown */}
//           <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
//             <InputLabel id="role-label">Account</InputLabel>
//             <Select
//               labelId="role-label"
//               id="role"
//               value={role}
//               onChange={handleRoleChange}
//               label="role"
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value="student">Student</MenuItem>
//               <MenuItem value="teacher">Teacher</MenuItem>
//               <MenuItem value="admin">Admin</MenuItem>
//             </Select>
//           </FormControl>

         
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default StudentNavMain;

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2Icon from '@mui/icons-material/Person2';
import SchoolIcon from '@mui/icons-material/School';

const StudentNavMain = () => {
  const [role, setRole] = React.useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#d9e3f0',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Logo + Edupro Text */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SchoolIcon sx={{ color: 'black', fontSize: 30 }} />
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black' }}>
            Edupro
          </Typography>
        </Box>

        {/* Right: Icons and Dropdown */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <NotificationsNoneOutlinedIcon sx={{ fontSize: 30, color: 'black', marginRight: '40px' }} />
          <Person2Icon sx={{ fontSize: 30, color: 'black' }} />

          {/* Account Dropdown */}
          <FormControl variant="outlined" size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="role-label">Account</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              value={role}
              onChange={handleRoleChange}
              label="Account"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="teacher">Teacher</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default StudentNavMain;

