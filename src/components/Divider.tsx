import React from 'react';

interface CardProps {
  type?: string;
  className?: string;
}

const Divider: React.FC<CardProps> = ({ type, className }) => {
  const wrapperstyle = {
    display: 'flex',
    marginTop: '80px',
    marginBottom: '80px', // Fixed typo (was "margrinBottom")
  };

  const dividerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 0',
    backgroundImage: 'url(/portfolio/assets/dotted-line.svg)',
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'contain',
    width: '100%',
    height: '10px',
    opacity: '0.4',
  };

  return (
    <div style={wrapperstyle} className={className || ''}>
      <div style={dividerStyle}></div>
    </div>
  );
};

export default Divider;
