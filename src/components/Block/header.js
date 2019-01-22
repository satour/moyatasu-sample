import React from 'react';
import Logo from '../Element/logo.js';
import LoginLogoutButton from '../Element/LoginLogoutButton.js';

class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="moya__header">
          <Logo/>
          <LoginLogoutButton/>
        </header>
      </div>
    )
  }
}

export default Header;
