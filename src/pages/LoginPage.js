import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADDRESS } from '../constants/constants';

const LoginPage = () => {
  const [userId, setuserId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate('/signup');
  };

  const handleLogin = async () => {
    const response = await fetch(`${ADDRESS}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: userId,
        password: password,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      navigate('/main');
    } else {
      alert('다시 로그인 해주세요!');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-80'>
        <h2 className='text-2xl font-bold text-center mb-4'>로그인</h2>
        <input
          type='userId'
          placeholder='ID'
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
          className='w-full p-2 mb-3 border rounded-md'
        />
        <input
          type='password'
          placeholder='PASSWORD'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 mb-3 border rounded-md'
        />
        <button
          onClick={handleLogin}
          className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'
        >
          로그인
        </button>
        <div className='text-center mt-4'>
          <button
            className='text-blue-500 hover:underline'
            onClick={goToSignUpPage}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
