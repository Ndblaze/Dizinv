import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  BarElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  BarElement
);

const data = {
  labels: [
    "Teachers",
    "Licence 1",
    "Licence 2",
    "Licence 3",
    "Master 1",
    "Master 2",
  ],
  datasets: [
    {
      label: "Users Analytics",
      data: [500, 700, 450, 300, 280, 150],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(241, 90, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(147, 250, 165, 0.5)",
      ],

      borderWidth: 1,
    },
  ],
};

const options = {
  layout: {
    padding: {
      top: 60,
      left: 60,
      right: 60,
      bottom: 60,
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Pie Chart of users (Teachers, Students)",
      padding: {
        top: 10,
        bottom: -20,
      },
    },
    legend: {
      position: "right",
      labels: {
        boxWidth: 15,
        boxHeight: 10,
      },
    },
  },
};

const PieChart = ({ setChartView }) => {
  return (
    <Wrapper>
      <Pie data={data} options={options} />
      <ButtonContainer>
        <Button onClick={() => setChartView("pie")}>#Piechart</Button>
        <Button onClick={() => setChartView("bar")}>#Barchart</Button>
        <Button onClick={() => setChartView("line")}>#Linechart</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default PieChart;

const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  height: 20px;
  margin-top: -70px;
  margin-right: 10px;
  font-size: 16px;
  color: #adb1c0;
  border: none;
  cursor: pointer;
`;
