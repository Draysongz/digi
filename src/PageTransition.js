// PageTransition.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './PageTransition.css'; // Add your transition styles

const PageTransition = ({ children, ...props }) => {
  return (
    <CSSTransition
      {...props}
      timeout={500} // Adjust the transition duration as needed
      classNames="page-transition"
    >
      {children}
    </CSSTransition>
  );
};

export default PageTransition;
