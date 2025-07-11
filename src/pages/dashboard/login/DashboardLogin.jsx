import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';


//styls
import './styles.scss'

//imgs
import Frame from '../../../assets/hero-avatar.png';
import Logo from '../../../assets/logo2.png';


export default function DashboardLogin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState(null);
  const from = location.state?.from?.pathname || '/dashboard';

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      // Clear the router state to remove the message
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);


  const onSubmit = (data) => {
    const { username, password } = data;


    if (username === 'Admin' && password === 'admin@123') {
      localStorage.setItem('auth', 'true');
      navigate(from, { replace: true });

    }
    else {
      if (username !== 'Admin') {
        setError('username', {
          type: 'manual',
          message: 'Invalid username',
        });
      }
      if (password !== 'admin@123') {
        setError('password', {
          type: 'manual',
          message: 'Invalid password',
        });
      }
    }
  };


  return (
    <div className="dashboard-login-main">

      <section className='sec-left'>

        <div className="c1 circle" />
        <div className="c2 circle" />
        <div className="c3 circle" />

        <div className="top-sec">
          <img src={Logo} alt="" className="logo" />
          <p>Dashboard<br />Access</p>
        </div>
        <div className="bottom-img">
          <img src={Frame} alt="" />
        </div>


      </section>
      <section className='sec-right'>
        {message && <p className='login-notification'>{message}</p>}

        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='input-container'>
            <input type="text" {...register('username')} placeholder='Enter user name' />
            {errors.username && (
              <p style={{ color: 'red' }}>{errors.username.message}</p>
            )}
          </div>
          <div className='input-container'>
            <input
              {...register('password')}
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}

            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}

            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
            {errors.password && (
              <p style={{ color: 'red' }}>{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className='loginbtn'>Login</button>
        </form>
      </section>


    </div>
  )
}
