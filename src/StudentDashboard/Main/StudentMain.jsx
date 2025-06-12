import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { PiTarget } from "react-icons/pi";
import ColoredCircularProgress from "./ColouredProgress";
import SemiCircularProgressBar from "./SemiColouredProgress";
import { MdAssignment } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { Divider } from "@mui/material";
import { Button } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "220px",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  fontSize: "1.05rem",
  flexDirection: "column",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles?.("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Item sx={{ borderRadius: 3 }}>
            <Typography variant="h6">Overall Performance</Typography>
            <Typography variant="body2">Course completion rate</Typography>
            <SemiCircularProgressBar percentage={40} label="PRO LEARNER" />
          </Item>
        </Grid>

        <Grid size={4}>
          <Item sx={{ borderRadius: 3 }}>
            {/*  Wrapper for horizontal padding */}
            <Box paddingLeft={4} paddingRight={4} width="100%">
              {/* Total Courses Enrolled */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                mb={1}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <HistoryEduIcon />
                  <Typography variant="body2">
                    Total Courses Enrolled
                  </Typography>
                </Box>
                <ColoredCircularProgress completed={5} total={5} />
              </Box>

              {/* Courses Completed */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                mb={1}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <PiTarget size={20} />
                  <Typography variant="body2">Courses Completed</Typography>
                </Box>
                <ColoredCircularProgress completed={1} total={5} />
              </Box>

              {/* Hours Spent */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <HourglassEmptyIcon />
                  <Typography variant="body2">Hours Spent</Typography>
                </Box>
                <ColoredCircularProgress completed={3} total={5} />
              </Box>
            </Box>
          </Item>
        </Grid>

        <Grid size={4}>
          <Item sx={{ borderRadius: 3 }}>
            {/*  Wrapper for horizontal padding */}
            <Box paddingLeft={4} paddingRight={4} width="100%">
              {/* Total Courses Enrolled */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                mb={1}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <HistoryEduIcon />
                  <Typography variant="body2">Live classes attended</Typography>
                </Box>
                <ColoredCircularProgress completed={4} total={5} />
              </Box>

              {/* Courses Completed */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                mb={1}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <MdQuiz />
                  <Typography variant="body2">Quiz practised</Typography>
                </Box>
                <ColoredCircularProgress completed={0} total={5} />
              </Box>

              {/* Hours Spent */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <MdAssignment />
                  <Typography variant="body2">Assignement done</Typography>
                </Box>
                <ColoredCircularProgress completed={2} total={5} />
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {/* Upcoming classes */}
        <Grid item size={8} spacing={2}>
          <Item
            sx={{ alignItems: "flex-start", borderRadius: 2.5, width: "100%" }}
          >
            {/* Heading */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Upcoming Classes
            </Typography>

            {/* Class Info Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box
                component="img"
                src="studying.jpg"
                alt="Newton Class"
                sx={{ width: 50, height: 50, borderRadius: 1 }}
              />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  Newtonian Mechanics - Class 5
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By Rajesh Ahmed
                </Typography>
              </Box>
            </Box>

            {/* Divider Line */}
            <Divider
              sx={{
                my: 1,
                width: "100%",
                borderBottomWidth: 1.5,
                borderColor: "#ccc",
              }}
            />
             <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2,mt: 2,pl: 0 }}>
              <Box
                component="img"
                src="studying.jpg"
                alt="Newton Class"
                sx={{ width: 50, height: 50, borderRadius: 1 }}
              />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  Polymer - Class 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  By Khalid Khan
                </Typography>
              </Box>
              <Button
                          variant="contained"
                          size="small"
                          sx={{
                            backgroundColor: '#d9e3f0',
                            color: 'black',
                            borderRadius: '5px',
                            textTransform: 'none',
                            width: '100px',
                            display: 'flex',
                            marginLeft:'450px',
                            border: '{3}px solid black',
                            '&:hover': {
                              backgroundColor: 'black',
                              color: 'white',
                            },
                          }}
                        >
                          Join 
                        </Button>
            </Box>

            
          </Item>
        </Grid>

        {/* 5 Days Without a Break - right card */}
        <Grid item size={4}>
          <Item sx={{ alignItems: "flex-start", borderRadius: 2.5 }}>
            <Typography variant="h6" color="black">5 Days Without a Break</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" sx={{ mb: 2 }}>
              The record is 16 days without a break
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              {["Sat", "Sun", "Mon", "Tue", "Wed","Thu"].map((day, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    p: 1,
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    width: 40,
                  }}
                >
                  <Typography variant="caption">{day}</Typography>
                  <Typography variant="h6">🔥
                    
                  </Typography>
                </Box>
              ))}
            </Stack>
            <Typography variant="caption" color="text.secondary">
              ✔ 6 classes covered &nbsp;&nbsp;&nbsp; ✔ 4 assignments completed
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
