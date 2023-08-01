import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBMvukoiif_1RC74jhGIEdy_KvPfGgw4_k",
    authDomain: "nftshop-80ab1.firebaseapp.com",
    projectId: "nftshop-80ab1",
    storageBucket: "nftshop-80ab1.appspot.com",
    messagingSenderId: "673499451056",
    appId: "1:673499451056:web:d41a14144aa5346fbfb575",
    measurementId: "G-7Y589JXSK7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };
