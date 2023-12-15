import React from 'react';
import FacebookLogin from 'react-facebook-login';

function FacebookLoginButton({ onLogin, onLogout }) {
  const responseFacebook = (response) => {
    if (response.status === 'connected') {
      // The user is logged in through Facebook.
      // You can perform actions based on the `response` object.
      onLogin(response);
    } else {
      // The user is not logged in or has logged out.
      onLogout();
    }
  };

  return (
    <FacebookLogin
      appId="1403340220259743"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}

export default FacebookLoginButton;
