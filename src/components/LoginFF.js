import { LoginForm } from '@userfront/toolkit'
import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginFF = () => {
  return (
    <><div>LoginFF</div><LoginForm/>
    <div className='text-center p-5'>
        <Link to={"/register"}>
            <Button>
                Зарегаться
            </Button>
        </Link>
        <Link to={"/dashboard"}>
            <Button className='m-1'>
                dashboard
            </Button>
        </Link>
    </div>
    </>
  )
}

export default LoginFF