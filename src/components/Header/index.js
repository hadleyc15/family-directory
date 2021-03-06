import React from 'react';

function Header(props) {

  return (
    <header className="flex-row space-between width:100%">
      <h1>Chris Hadley</h1>
      {props.children}
    </header>
  );
}

export default Header;
