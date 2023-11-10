import React from "react";
import styled from "styled-components";
import { ArcElement, Chart } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement);

const Div = styled.div`
  justify-content: center;
  display: flex;
  height: inherit;
`;

export const TasksPieChart = ({ totalTasks, completedTasks }) => {
  
  const data = {
    labels: ["Total Tasks","Completed Tasks"],
    datasets: [
      {
        data: [totalTasks,completedTasks],
        backgroundColor: ["#e7e7e7", "#1890ff"],
      },
    ],
  };
  return (
    <Div>
      <Pie data={data}></Pie>
    </Div>
  );
};
