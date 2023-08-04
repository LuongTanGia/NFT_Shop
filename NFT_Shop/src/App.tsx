import React from "react";
import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import HomePage from "./Pages/HomePage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route>
        <Route path="" element={<HomePage />}></Route>
      </Route>
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
    </Routes>
  );
};

export default App;
