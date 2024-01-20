import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "jan",
      "Active User": 9800,
    },
    {
      name: "Feb",
      "Active User": 8500,
    },
    {
      name: "Mar",
      "Active User": 2000,
    },
    {
      name: "Apr",
      "Active User": 2780,
    },
    {
      name: "May",
      "Active User": 4290,
    },
    {
      name: "June",
      "Active User": 2390,
    },
    {
      name: "July",
      "Active User": 2090,
    },
    {
      name: "Aug",
      "Active User": 9590,
    },
    {
      name: "Sept",
      "Active User": 5390,
    },
    {
      name: "Oct",
      "Active User": 1890,
    },
    {
      name: "Nov",
      "Active User": 3590,
    },
    {
      name: "Dec",
      "Active User": 2490,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTiltle"> User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf"  strokeDasharray="5 5"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
