import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';  
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Person2Icon from '@mui/icons-material/Person2';

export default function UserMenu({ menuItems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (route) => {
    setAnchorEl(null);
    if (route) {
      navigate(route);
    }
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="black"
      >
        <Person2Icon />
      </IconButton>

      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{
          'aria-labelledby': 'user-menu',
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleClose(item.route)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
