import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gradiant-to-r from-purple-700 to-blue-700 text-white py-5'>
      <div className='container mx-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left'>
        <h1 className='text-3xl font-bold italic mb-4 md:mb-0'>Portfolio</h1>
        <p className='text-sm text-center mt-2 md:mt-0 md:ml-4'>&copy; 2025 Aaisha Shahani. All rights reserved.</p>
      </div>
    </footer>
  );
};
