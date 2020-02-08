import React from 'react';

const movingEllipsis = () => {
  return '...';
};

const TextProgress = props => {
  const { text } = props;
  return (
    <p>{text}{movingEllipsis()}</p>
  );
};

export default TextProgress;