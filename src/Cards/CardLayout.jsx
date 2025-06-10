import { Button } from '@mui/material';
import React from 'react';
function CardLayout({ hackathons = [] }) {
  const containerStyle = {
    padding: 8,
    flexGrow: 1,
    zIndex:1,
    top:0,
    marginLeft:'-10px'
  };

  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  };

  const cardStyle = {
     padding: 2,
     border: '1px solid #ddd',
    borderRadius: 6,
    backgroundColor: '#fff',
    
  };

  const flexRowResponsive = {
    display: 'flex',
    flexWrap: 'wrap',
flexDirection: 'row',

    justifyContent: 'space-between',
  };

  const leftBoxStyle = {
    flex: 1,
    backgroundColor: '#EDE8',
    borderRadius: 6,
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: 14,
  };

  const subtitleStyle = {
    fontSize: 12,
    color: '#666',
  };

  const iconTextRow = {
    display: 'flex',
    gap: 8,
    marginTop: 4,
    fontSize: 12,
    alignItems: 'center',
  };

  const deadlineTextStyle = {
    color: 'red',
    fontWeight: 500,
    fontSize: 12,
    marginTop: 4,
  };

  const dividerStyle = {
    width: 1,
    backgroundColor: '#ccc',
    margin: '0 8px',
    display: window.innerWidth < 600 ? 'none' : 'block',
  };

  const rightBoxStyle = {
    flex: 1,
    marginTop: window.innerWidth < 600 ? 8 : 0,
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    backgroundColor: '#EDE8',
  };

  const chipBaseStyle = {
    borderRadius: 12,
    padding: '2px 8px',
    width: 'fit-content',
    fontSize: 12,
  };

  const chipGreen = {
    ...chipBaseStyle,
    backgroundColor: '#4caf50',
    color: '#fff',
  };

  const chipBlue = {
    ...chipBaseStyle,
    backgroundColor: '#1976d2',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  };

  const chipOutlined = {
    ...chipBaseStyle,
    border: '1px solid #1976d2',
    color: '#1976d2',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  };

  return (
    // function checkDateColor()
    // {

    // }
    <div style={containerStyle}>
      <div style={listStyle}>
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} style={cardStyle}>
            <div style={flexRowResponsive}>
              <div style={leftBoxStyle}>
                <div style={titleStyle}>{hackathon.title}</div>
                <div style={subtitleStyle}>{hackathon.organizer}</div>
                <div style={iconTextRow}>
                  <span role="img" aria-label="trophy">
                    🏆
                  </span>{' '}
                  ${hackathon.prize}
                  <span style={{ marginLeft: 16 }} role="img" aria-label="people">
                    👥
                  </span>{' '}
                  {hackathon.participants}
                </div>
                <div style={deadlineTextStyle}>{hackathon.deadlineText}</div>
                <Button>Join Now</Button>
              </div>
              <div style={dividerStyle} />
              <div style={rightBoxStyle}>
                <div style={{ fontWeight: 'bold' }}>Deadline</div>
                <div style={subtitleStyle}>{hackathon.deadlineFull}</div>

                <div style={chipGreen}>Mode: {hackathon.mode}</div>

                <div style={chipBlue}>
                  🌐 Type: {hackathon.type}
                </div>

                <div style={chipOutlined}>
                  📍 Location
                </div>

                <div>
                  <strong>Skills:</strong> {hackathon.skills.join(', ')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import AbcIcon from '@mui/icons-material/Abc';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   padding: theme.spacing(2),
//   textAlign: 'left',
//   color: theme.palette.text.secondary,
//   borderRadius: '1px',
//   boxShadow: theme.shadows[1],
//   border:'0.3px solid lightgray',
//   height: '100%',
//   // marginTop:'160px',
  
// }));

// const CardLayout = ({ title, clgName, amount, participants, noOfDays, date, mode, type, skills }) => {

//      const getColor = (days) => {
//     if (days < 20) return 'red';
//     else if (days < 40) return 'orange';
//     else return 'green';
//   };


//   return (
//     <Box sx={{ my: 2,  marginLeft: '18px' }}>
//       <Grid container spacing={0}>
//   <Grid size={2}>
//     <Item>
//       {/* <img
//               src="milestone.png"
//               alt="Example"
//               style={{ width: '100%', borderRadius: '8px' }}/> */}
//               <AbcIcon sx={{ fontSize: 60,display:'flex',alignItems: 'center',justifyContent:'center' }} />
//               </Item>
//   </Grid>
//   <Grid size={6}>
//     <Item>size=4</Item>
//   </Grid>
//   <Grid size={4}>
//     <Item>size=4</Item>
//   </Grid>
//    </Grid>
//     </Box>
   
//   );
// };



export default CardLayout;