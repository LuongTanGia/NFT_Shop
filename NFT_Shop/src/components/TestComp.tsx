import React from "react";
import { useEffect, useState } from "react";
import { get, ref, child } from "firebase/database";
import { database } from "../firebase/firebase"; // Make sure to import your Firebase database instance

interface YourDataItem {
    Age: number;
    Name: string;
    Status: string;
}
function TestComp() {
    const [data, setData] = useState<YourDataItem[]>([]);
    useEffect(() => {
        const dbRef = ref(database);
        const fetchData = async () => {
            try {
                const snapshot = await get(child(dbRef, "User"));
                if (snapshot.exists()) {
                    setData(Object.values(snapshot.val()));
                } else {
                    console.log("No data available");
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Hello</h1>
            {data.map((item, index) => (
                <div>
                    <h1 key={index}>{item.Name}</h1>
                    <p>{item.Age}</p>
                    <span>{item.Status}</span>
                </div>
            ))}
        </div>
    );
}

export default TestComp;
