import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {year} Jude Musyoki</p>
    </footer>
  );
};

export default Footer;
