import React from "react";

import { Container } from "./precip-probability-styles";

import { SubTitle } from "../styles/global-styles";

import {
    BarChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Legend,
    CartesianAxis,
    CartesianGrid,
    Bar,
    LabelList,
    Label
} from "recharts";

const data = [];
const iconLabels = [];

for (let i = 0; i < 24; i++) {
    data.push({ y: Math.random(), x: i + 1 });
    // iconLabels.push(i % 2 === 0 ? <FaCloud /> : <FaSun />);
    // iconLabels.push(i - 10);
}

const showHours = num => num + ":00";

export const PrecipProbability = () => {
    return (
        <Container>
            <SubTitle>Precip Probability % in Kyiv</SubTitle>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    data={data}
                    margin={{ top: 0, right: 20, bottom: -10, left: -20 }}
                >
                    <Tooltip />
                    <CartesianGrid />
                    <YAxis dataKey="y" />
                    <XAxis dataKey="x" tickFormatter={showHours} />
                    <Bar dataKey="y" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    );
};
