import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
            <div className="text-center text-white">
                <h1 className="text-6xl font-extrabold mb-4">404</h1>
                <p className="text-2xl mb-8">Page Not Found</p>
                <Link to="/" className="text-lg text-blue-100 hover:text-blue-200">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
