import React from "react";
import BarChartComponent from "./components/BarChartComponent";
import RadialBarChartComponent from "./components/RadialBarChartComponent";
import LineChartComponent from "./components/LineChartComponent";
import RadarChartComponent from "./components/RadarChartComponent";

const App = () => {
  return (
    <div>
      <h1>SPORTSEE</h1>
      <BarChartComponent />
      <LineChartComponent />
      <RadarChartComponent />
      <RadialBarChartComponent />
    </div>
  );
};

export default App;
