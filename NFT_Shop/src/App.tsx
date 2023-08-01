import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HomePage from "./Pages/HomePage";

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <HomePage />
            </div>
            {/* <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            /> */}
        </Router>
    );
};

export default App;
