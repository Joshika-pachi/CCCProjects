import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const SemiCircleProgress = ({ percentage, label }) => {
  const [animatedOffset, setAnimatedOffset] = useState(314);

  useEffect(() => {
    // Calculate the offset based on percentage (314 is approximately the path length)
    const offset = 314 - (percentage / 100) * 314;
    // Animate from full circle to the target percentage
    setTimeout(() => {
      setAnimatedOffset(offset);
    }, 100);
  }, [percentage]);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <svg width="240" height="100" viewBox="0 0 240 120">
        <path
          d="M 20 120 A 100 100 0 0 1 220 120"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="20"
        />
        <path
          d="M 20 120 A 100 100 0 0 1 220 120"
          fill="none"
          stroke="#2ecc71"
          strokeWidth="20"
          strokeDasharray="314"
          strokeDashoffset={animatedOffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s ease-out" }}
        />
      </svg>
      <Typography variant="h4" sx={{ mt: 2 }}>
        {percentage}%
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {label}
      </Typography>
    </Box>
  );
};

export default SemiCircleProgress;