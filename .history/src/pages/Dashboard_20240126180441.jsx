import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";
import mock from ".../public/mock.json"

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen" style={{ backgroundColor: "#1A2F52" }}>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <NavBar />

                {/* Main content */}
                <main className={`flex-1 overflow-x-hidden overflow-y-auto ${isSidebarOpen ? 'ml-[150px]' : 'ml-0'}`}>
                    <div className="container mx-auto px-6 py-8">
                        {/* Table */}
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Color</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">File Number</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Address</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">S/A/A</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date Stamp</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Appraiser</th>
                                    <th className="px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">License</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mock.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.color}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.file_num}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.client}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div>{item.address.split('\n').map((line, idx) => <div key={idx}>{line}</div>)}</div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item['S/A/A']}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.date_stamp}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.appraiser}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.license}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
