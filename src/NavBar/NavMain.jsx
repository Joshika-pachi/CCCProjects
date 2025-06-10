import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import UserMenu from '../Drpdown';
import LoginLayout from '../Login/LoginLayout';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [];

const NavMain = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const getStyles = (name) => {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '20px',
            textTransform: 'none',
            width: '200px',
            '&:hover': {
              backgroundColor: 'black',
            },
          }}
        >
          Skill Censui.Ai
        </Button>

        {/* Host a Contest dropdown */}
        <FormControl sx={{ minWidth: 200 }}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            variant="standard"
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em> Host a Contest</em>;
              }
              return selected.join(', ');
            }}
            MenuProps={MenuProps}
            disableUnderline
            sx={{
              '&::before': { borderBottom: 'none' },
              '&::after': { borderBottom: 'none' },
              '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
            }}
          >
            <MenuItem disabled value="">
              <em>Host a Contest</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Join a Contest dropdown */}
        <FormControl sx={{ minWidth: 200 }}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            variant="standard"
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em> Join a Contest</em>;
              }
              return selected.join(', ');
            }}
            MenuProps={MenuProps}
            disableUnderline
            sx={{
              '&::before': { borderBottom: 'none' },
              '&::after': { borderBottom: 'none' },
              '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
            }}
          >
            <MenuItem disabled value="">
              <em>Join a Contest</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

       
        <UserMenu
          menuItems={[
            { label: 'Login', route: '/login' },
            { label: 'Sign Up', route: '/signup' },
            // { label: 'Settings', route: '/settings' },
          ]}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavMain;
