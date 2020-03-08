import React from "react";
import "./App.css";

import { Header } from "../header/header";
import { MainSection } from "../main-section/main-section";
import { Body } from "../body/body";

function App() {
    return (
        <div className="App">
            <Header />
            <MainSection />
            <Body />
        </div>
    );
}

export default App;
