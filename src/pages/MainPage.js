import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ADDRESS } from '../constants/constants';
import AnimatedNumber from 'animated-number-react';

const MainPage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [fine_total, setFine_total] = useState('0');

  const handleLogout = () => {
    navigate('/');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (image) {
      console.log('업로드할 이미지:', image);
    } else {
      console.log('이미지를 선택해주세요.');
    }
  };

  const fetchFineTotal = async () => {
    const response = await fetch(`${ADDRESS}/mission/fine-total`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      setFine_total(result.total_fine);
    } else {
      console.error('불러오기 실패');
    }
  };

  useEffect(() => {
    fetchFineTotal();
  }, []);

  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-xl font-medium mb-4'>지금까지 쌓인 벌금</h2>
        <div className='text-2xl font-bold text-blue-500'>
          <AnimatedNumber
            value={fine_total}
            duration={1000}
            formatValue={(value) => value.toFixed(0)}
          />
        </div>
      </div>

      <div className='mt-6 flex flex-col justify-center items-center'>
        <div className='flex- items-start justify-start'>
          <h2 className='text-xl font-medium mb-4'>인증샷 업로드</h2>
        </div>
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          className='border-2 border-gray-300 p-2 rounded-md mb-4 cursor-pointer'
        />

        {image && (
          <div className='flex justify-center items-center mb-4'>
            <img
              src={image}
              alt='미리보기'
              className='size-60 object-cover rounded-md'
            />
          </div>
        )}
        <div className='flex gap-4'>
          <div>
            <button
              onClick={handleUpload}
              className='bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition'
            >
              업로드
            </button>
          </div>
          <div>
            <button
              onClick={handleLogout}
              className='bg-red-200 text-white px-4 py-2 rounded-md hover:bg-red-600 transition'
            >
              로그아웃하고 공부하러 가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
