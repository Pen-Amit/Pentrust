import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  return (
    // Your modal content goes here
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg">
          {/* JotForm iframe */}
          <iframe
            title="Contact Us Form"
            src="https://form.jotform.com/233632571387461"
            width="100%"
            height="600px"
            frameBorder="0"
          ></iframe>
          <button className="mt-4" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
