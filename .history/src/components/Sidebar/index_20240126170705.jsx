import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Removed the internal state management for isSidebarOpen

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[150px] overflow-y-auto text-right ${isOpen ? 'bg-purple-700' : 'hidden'}`}>
        
        {/* Toggle button inside sidebar when open */}
        {isOpen && (
          <span
            className="text-white text-2xl z-50 top-0 button-style mt-3 cursor-pointer hover:bg-blue-600 rounded-full py-2 px-4"
            onClick={toggleSidebar}
          >
            {"x"}
          </span>
        )}

        {/* Add a little space after the toggle button */}
        <div className="mt-2"></div>

        {/* My ABIE link */}
        <div className="flex items-center button-style mt-3 cursor-pointer hover:bg-blue-600 text-white rounded-full py-2 px-4">
          <span className="font-bold">My ABIE</span>
        </div>

        {/* ABIE/s */}
        <div className="flex items-center button-style mt-3 cursor-pointer hover:bg-blue-600 text-white rounded-full py-2 px-4">
          <span className="font-bold">ABIE/s</span>
        </div>

        {/* Upload */}
        <div className="flex items-center button-style mt-3 cursor-pointer hover:bg-blue-600 text-white rounded-full py-2 px-4">
          <span className="font-bold">Upload</span>
        </div>

      </div>

      {/* Toggle button outside sidebar when closed */}
      {!isOpen && (
        <span
          className="sidebar absolute text-white top-2 left-0 cursor-pointer z-20 bg-purple-700 p-0 rounded-md"
          onClick={toggleSidebar}
        >
          {"Menu"}
        </span>
      )}
    </div>
  );
};

export default Sidebar;
