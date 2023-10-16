import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import vote from "../assets/images/vote.png"

const Home = () => {

    // Timeline
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId);
    }, []);


    // Greeting
    const [greeting, setGreeting] = useState(''); // Initialize with an empty greeting

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();

            const currentHour = now.getHours();

            if (currentHour >= 5 && currentHour < 12) {
                setGreeting('Good Morning');
            } else if (currentHour >= 12 && currentHour < 15) {
                setGreeting('Good Noon');
            } else if (currentHour >= 15 && currentHour < 17) {
                setGreeting('Good Afternoon');
            } else if (currentHour >= 17 && currentHour < 19) {
                setGreeting('Good Evening');
            } else {
                setGreeting('Good night');
            }
        }, 1000); // Update every second

        return () => clearInterval(intervalId);
    }, []);

    return (

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid style={{ textAlign: "center", padding: 20 }} item lg={12}>
                <p style={{ fontSize: 50, fontFamily: "monospace" }}>{currentDateTime.toLocaleTimeString()}</p>
                <h1 style={{ fontSize: 40, fontFamily: "monospace" }}>{greeting}</h1>
            </Grid>

            <Grid style={{ textAlign: "center", marginTop: 50 }} item lg={12}>
                <h3 style={{ fontSize: 70, fontFamily: "monospace" }}>Wellcome</h3>
                <h3 style={{ fontSize: 50, fontFamily: "monospace" }}>Blockchain E-Voting System App</h3>
                <div data-aos="fade-right" className="flex justify-center items-center">
                    <img style={{ marginTop: 10 }} src={vote}></img>
                </div>
            </Grid>
        </Grid>

    );
};

export default Home;
