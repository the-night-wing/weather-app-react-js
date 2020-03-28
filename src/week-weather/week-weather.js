import React from "react";

import { Container } from "./week-weather-styles";

import { SubTitle } from "../styles/global-styles";

import {
    ComposedChart,
    LineChart,
    BarChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    CartesianGrid,
    Bar,
    Line
} from "recharts";

const data = [];

for (let i = 0; i < 7; i++) {
    data.push({
        y: Math.random().toFixed(1),
        z: Math.random().toFixed(1),
        m: Math.random().toFixed(1),
        x: i + 1
    });
    // iconLabels.push(i % 2 === 0 ? <FaCloud /> : <FaSun />);
    // iconLabels.push(i - 10);
}

export const WeekWeather = () => {
    return (
        <Container>
            <SubTitle>1 week weather in Kyiv</SubTitle>
            <ResponsiveContainer width="100%" height="80%">
                <ComposedChart
                    data={data}
                    margin={{ top: 10, right: 20, bottom: -10, left: 0 }}
                >
                    <CartesianGrid />
                    <Bar dataKey="y" fill="#a8e1ff" />
                    <Line dataKey="z" strokeWidth={3} stroke="#782390" />
                    <Line dataKey="m" strokeWidth={3} stroke="#34abeb" />
                    <XAxis dataKey="x" />
                    <Tooltip />
                </ComposedChart>
            </ResponsiveContainer>
        </Container>
    );
};
