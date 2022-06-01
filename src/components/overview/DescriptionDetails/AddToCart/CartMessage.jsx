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
      case 'failure':
        setColor('red');
        setBackgroundColor('pink');
        setMessageText('Cart addition failed, please try again');
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
        className="add-to-cart--message"
        style={{
          backgroundColor,
          color,
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
