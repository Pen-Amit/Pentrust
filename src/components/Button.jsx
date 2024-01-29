import React, { useState } from 'react';
import Modal from './contact-us'; // Make sure to adjust the path based on your project structure

const Button = ({ styles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactUsClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
        onClick={handleContactUsClick}
      >
        Contact Us
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Button;
