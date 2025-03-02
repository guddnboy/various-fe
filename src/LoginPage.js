import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-80'>
        <h2 className='text-2xl font-bold text-center mb-4'>로그인</h2>
        <input
          type='email'
          placeholder='ID'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          <button className='text-blue-500 hover:underline'>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
