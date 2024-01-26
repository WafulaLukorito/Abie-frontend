import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen" 
              style = {{backgroundColor: "#0F172A"}}>

       {/* // style={{ background: 'linear-gradient(to left, #6dd5ed, #2193b0)' }}>  Gradient background */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Navbar */}
                <NavBar />

                {/* Main content */}
                <main className={`flex-1 overflow-x-hidden overflow-y-auto ${isSidebarOpen ? 'ml-[150px]' : 'ml-0'}`}>
                    <div className="container mx-auto px-6 py-8">
                        {/* Main content goes here */}
                        <table class="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
