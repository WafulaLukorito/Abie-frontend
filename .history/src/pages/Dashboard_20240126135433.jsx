
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

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
                        <h1>Hello World! </h1>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;