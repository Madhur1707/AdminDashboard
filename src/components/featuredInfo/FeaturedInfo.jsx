import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItems">
        <span className="featuredTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">Rs. 5000</span>
          <span className="featureMoneyRate">
            -2000 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <div className="featureSub">Compared to last month..</div>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Sales</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">Rs. 7000</span>
          <span className="featureMoneyRate">
            -1000 <ArrowDownward className="featureIcon negative" />
          </span>
        </div>
        <div className="featureSub">Compared to last month..</div>
      </div>
      <div className="featuredItems">
        <span className="featuredTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featureMoney">Rs. 1200</span>
          <span className="featureMoneyRate">
            +2502 <ArrowUpward className="featureIcon " />
          </span>
        </div>
        <div className="featureSub">Compared to last month..</div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
