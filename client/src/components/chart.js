import { useState } from "react";
import LineChart from "./LineChart";
import { UserData } from "../Data";

function Chart() {
  const [userData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: "Giá (VNĐ)",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          // "#ecf0f1",
          // "#50AF95",
          // "#f3ba2f",
          // "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="Chart">
      <div style={{ width: 1250 }}>
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default Chart;