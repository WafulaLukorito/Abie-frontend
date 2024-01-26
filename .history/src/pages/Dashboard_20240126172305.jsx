import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " style={{ background: 'linear-gradient(to left, #6dd5ed, #2193b0)' }}> {/* Gradient background */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Navbar */}
                <NavBar />

                {/* Main content */}
                <main className={`flex-1 overflow-x-hidden overflow-y-auto ${isSidebarOpen ? 'ml-[150px]' : 'ml-0'}`}>
                    <div className="container mx-auto px-6 py-8">
                        {/* Main content goes here */}
                        <h1>Hello World!</h1>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
