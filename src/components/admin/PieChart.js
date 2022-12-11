import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS } from "chart.js";
import EquipmentData from "../../data/equipments.json";
import RequisitionData from "../../data/requisitions.json";
import UserData from "../../data/user.json";
import CabinetData from "../../data/cabinets.json";

Chart.register(ArcElement);
ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = () => {
  
  var data = {
    labels: [" User", " Requisition", "Equipment", "Cabinet"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          Object.keys(UserData).length,
          Object.keys(RequisitionData).length,
          Object.keys(EquipmentData).length,
          Object.keys(CabinetData).length,
        ],
        backgroundColor: [
          "rgb(0, 138, 66)",
          "rgb(184, 15, 10)",
          "rgb(54, 162, 235)",
          "rgb(251,177, 23)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div>
      <div className="header">
        <div className="links"></div>
      </div>
      <Doughnut data={data} />
    </div>
  );
};
export default PieChart;
