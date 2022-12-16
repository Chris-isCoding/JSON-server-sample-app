import React from 'react';

const Footer = ({ length }) => (
  <footer>
    <p>
      {length} {length === 1 ? 'task' : 'tasks'}
    </p>
  </footer>
);

export default Footer;
