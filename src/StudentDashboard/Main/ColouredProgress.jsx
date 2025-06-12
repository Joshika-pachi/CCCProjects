import React from 'react';

const CircularProgressBar = ({ completed, total }) => {
  const radius = 20;
  const stroke = 5;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const progress = total > 0 ? completed / total : 0;
  const offset = circumference * (1 - progress);

  // Color based on progress
  let strokeColor = 'red';
  if (progress >= 0.7) strokeColor = 'green';
  else if (progress >= 0.4) strokeColor = 'orange';

  return (
    <svg height={radius * 2} width={radius * 2}>
      {/* Background Circle */}
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Progress Circle (anticlockwise by using reverse dashoffset and transform) */}
      <circle
        stroke={strokeColor}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={-offset} // negative = anticlockwise
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{
          transition: 'stroke-dashoffset 0.5s ease',
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
        }}
      />
      {/* Center Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="16"
        fill="#333"
      >
        {completed}
      </text>
    </svg>
  );
};

export default CircularProgressBar;


