import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import NavBar from "../components/Navbar";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-200">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Navbar */}
                <NavBar />

                {/* Main content */}
                <main className={`flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 ${isSidebarOpen ? 'ml-[150px]' : 'ml-0'}`}>
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
