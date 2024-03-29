import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import { WidgSm } from "../../components/widgetsmall/WidgSm";
import { WidgLg } from "../../components/widgetLarge/WidgLg";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgSm />
        <WidgLg />
      </div>
    </div>
  );
};

export default Home;
