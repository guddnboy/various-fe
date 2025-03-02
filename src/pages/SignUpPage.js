import React, { useEffect, useState } from 'react';
import { ADDRESS } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [userId, setuserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [userName, setuserName] = useState('');

  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await fetch(`${ADDRESS}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: userId,
        password: password,
        username: userName,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
      navigate('/');
    }
  };

  useEffect(() => {
    if (password !== '' && password === confirmPassword) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  }, [password, confirmPassword]);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-80'>
        <h2 className='text-2xl font-bold text-center mb-4'>회원가입</h2>
        <input
          type='userId'
          placeholder='사용할 아이디'
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
          className='w-full p-2 mb-3 border rounded-md'
        />
        <input
          type='text'
          placeholder='사용할 닉네임'
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          className='w-full p-2 mb-3 border rounded-md'
        />
        <input
          type='password'
          placeholder='사용할 비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full p-2 mb-3 border rounded-md ${
            !checkPassword ? 'border-red-500' : 'border-green-500'
          }`}
        />
        <input
          type='password'
          placeholder='비밀번호 확인'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`w-full p-2 mb-3 border rounded-md ${
            !checkPassword ? 'border-red-500' : 'border-green-500'
          }`}
        />

        <button
          onClick={handleSignup}
          className={`w-full text-white p-2 rounded-md hover:bg-blue-600 ${
            checkPassword ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!checkPassword}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
