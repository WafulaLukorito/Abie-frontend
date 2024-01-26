import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";
import mock from "./mock.json";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen" style={{ backgroundColor: "#E2E8F0" }}>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <NavBar />

                {/* Main content */}
                <main className={`flex-1 overflow-x-hidden overflow-y-auto ${isSidebarOpen ? 'ml-[150px]' : 'ml-0'}`}>
                <div className="container mx-auto px-6 py-8">
                 <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
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
                    <tr key={index} className="hover:bg-gray-100">
                        <td className="px-5 py-5 border-b border-gray-200  text-sm">
                            <span className={`h-4 w-4 inline-block rounded-full ${item.color === 'red' ? 'bg-red-500' : item.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.file_num}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.client}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                            <div>{item.address.split('\n').map((line, idx) => <div key={idx}>{line}</div>)}</div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                        <div>{item['S/A/A'].split('\n').map((line, idx) => <div key={idx}>{line}</div>)}</div></td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.date_stamp}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.appraiser}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 text-sm">{item.license}</td>
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
