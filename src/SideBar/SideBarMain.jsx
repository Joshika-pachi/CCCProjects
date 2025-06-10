import React from 'react';
import { FormControl, FormLabel, FormGroup } from '@mui/material';
import CustomCheckbox from './CheckBox';

const SidebarMain = ({ title, sections }) => {
  return (
    <div style={{ width: '200px', padding: '20px', backgroundColor: '#f0f0f0' ,height:'300px',height:'100%'}}>
      <h2>{title}</h2>
      {sections.map((section, index) => (
        <FormControl component="fieldset" style={{ marginBottom: '20px' }} key={index}>
          <FormLabel component="legend">{section.heading}</FormLabel>
          <FormGroup>
            {section.options.map((label, idx) => (
              <CustomCheckbox key={idx} label={label} />
            ))}
          </FormGroup>
        </FormControl>
      ))}
    </div>
  );
};

export default SidebarMain;
