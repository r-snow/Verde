import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function CartMessage({ message }) {
  const [isShown, setIsShown] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    switch (message) {
      case 'warning':
        setColor('red');
        setBackgroundColor('pink');
        setMessageText('Please pick a size!');
        setIsShown(true);
        break;
      case 'success':
        setColor('darkgreen');
        setBackgroundColor('lightgreen');
        setMessageText('Added to cart!');
        setIsShown(true);
        break;
      default:
        setIsShown(false);
    }
  }, [message]);
  return (
    isShown && (
      <div
        style={{
          backgroundColor,
          color,
          marginBottom: '0.8em',
          padding: '0.5em',
          borderRadius: '0.5em',
          fontFamily: 'Helvetica',
          textAlign: 'center',
          fontSize: '14px',
        }}
      >
        {messageText}
      </div>
    )
  );
}

CartMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
