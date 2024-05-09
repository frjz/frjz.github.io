import React from 'react'
import Userfront from '@userfront/toolkit';

const Dashboard = () => {
    const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <><div>
    <h2>Dashboard</h2>
    <pre>{userData}</pre>
    <button onClick={Userfront.logout}>Logout</button>
  </div></>
  )
}

export default Dashboard