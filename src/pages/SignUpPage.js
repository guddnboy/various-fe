import React, { useState } from 'react';

const SignupPage = () => {
  const [userId, setuserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-80'>
        <h2 className='text-2xl font-bold text-center mb-4'>회원가입</h2>
        <input
          type='userId'
          placeholder='사용할 아이디 (이메일)'
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
          className='w-full p-2 mb-3 border rounded-md'
        />
        <input
          type='text'
          placeholder='사용할 닉네임'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className='w-full p-2 mb-3 border rounded-md'
        />
        <input
          type='password'
          placeholder='사용할 비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 mb-3 border rounded-md'
        />
        <input
          type='password'
          placeholder='비밀번호 확인'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='w-full p-2 mb-3 border rounded-md'
        />
        <button
          onClick={handleSignup}
          className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
