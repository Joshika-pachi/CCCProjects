import React from 'react';
import CardLayout from './CardLayout';
import hackathonData from './CardMain';

function BodyMain() {
  return <CardLayout hackathons={hackathonData}/>;
}

export default BodyMain;