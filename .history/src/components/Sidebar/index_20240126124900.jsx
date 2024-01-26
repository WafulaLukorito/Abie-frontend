import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Toggle button */}
      <button
        className="p-4 text-white bg-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 w-64 px-8 py-4 bg-gray-800 transform transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
