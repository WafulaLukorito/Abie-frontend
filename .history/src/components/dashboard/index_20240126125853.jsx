import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-200">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Header */}
               <Header />

                {/* Main content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-6 py-8">
                        {/* Main content goes here */}
                    </div>
                </main>
            </div>
        </div>
    );
}
