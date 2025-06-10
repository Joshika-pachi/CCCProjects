import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CustomCheckbox = ({ label }) => {
  return (
    <FormControlLabel control={<Checkbox />} label={label} />
  );
};

export default CustomCheckbox;

