import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  Box,
  OutlinedInput
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import Buttons from '../Button';
import { green, red } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';


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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const FilterNavBar = () => {
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

  const btnStyle = {
  backgroundColor: 'lightgray',
  color: 'black',
  borderRadius: '5px',
  textTransform: 'none',
  width: '150px',
  '&:hover': {
    backgroundColor: 'lightblue',
  },
};


  return (
<div style={{}}>
    <AppBar
  position="fixed"
  sx={{
    top: '80px',
    width: 'calc(100% - 250px)',
    backgroundColor: '#EDEDED',
    boxShadow: 3,
    borderLeft: '1px solid lightgray',
    borderRight: '1px solid lightgray',
    zIndex: 1200,
  
  }}
>
  <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    <Button variant="contained" size="large" sx={btnStyle}>
      Domain 
      <FilterAltRoundedIcon />
    </Button>
    <Button variant="contained" size="large" sx={btnStyle}>
      Location
      <FilterAltRoundedIcon />
    </Button>
    <Button variant="contained" size="large" sx={btnStyle}>
      Skills
      <FilterAltRoundedIcon />
    </Button>
    <Button variant="contained" size="medium" sx={btnStyle}>
      Reward
      <FilterAltRoundedIcon />
    </Button>

    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  </Toolbar>
</AppBar>



  
  

  
  
</div>

//     </AppBar>
  );
};

export default FilterNavBar;