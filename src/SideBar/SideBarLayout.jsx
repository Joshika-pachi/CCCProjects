import React from 'react';
import SidebarMain from './SideBarMain';

const SideBarLayout = () => {
  const sections = [
    {
      heading: 'Mode',
      options: ['Online', 'Offline']
    },
    {
      heading: 'Location',
      options: ['Delhi', 'Bangalore']
    },
    {
      heading: 'Type',
      options: ['Hackathon', 'Internship']
    }
  ];

  return (
    <SidebarMain title="Filter" sections={sections} />
  );
};

export default SideBarLayout;
