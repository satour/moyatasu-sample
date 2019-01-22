import React from 'react'

const LoginLogoutButton = ({
  login,
  logout,
  stateMe
}) => {
  return (
    <span>
      <button onClick={login} className={stateMe ? 'hidden' : undefined}>Login</button>
      <button onClick={logout} className={!stateMe ? 'hidden' : undefined}>Logout</button>
    </span>
  )
}
export default LoginLogoutButton
