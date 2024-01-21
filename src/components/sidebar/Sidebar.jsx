import React from "react";
import "./sidebar.css";
import {
  AccountBox,
  BarChart,
  CurrencyExchange,
  Feedback,
  Info,
  LineStyle,
  Mail,
  Message,
  Person,
  ProductionQuantityLimits,
  Timeline,
  TrendingUp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="siderbarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="siderbarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="siderbarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu </h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="siderbarListItem active">
                <Person className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="siderbarListItem">
                <ProductionQuantityLimits className="sidebarIcon" />
                Products
              </li>
            </Link>

            <li className="siderbarListItem">
              <CurrencyExchange className="sidebarIcon" />
              Transactions
            </li>
            <li className="siderbarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="siderbarListItem active">
              <Mail className="sidebarIcon" />
              Mail
            </li>
            <li className="siderbarListItem">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="siderbarListItem">
              <Message className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="siderbarListItem active">
              <AccountBox className="sidebarIcon" />
              Manage
            </li>
            <li className="siderbarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="siderbarListItem">
              <Info className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
