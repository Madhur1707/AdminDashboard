import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22c1d6f3-f308-4791-ad79-c0dfb3cebbb0/dg3aos9-80c81c3c-f6dc-46f5-8f12-40604349ca31.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyYzFkNmYzLWYzMDgtNDc5MS1hZDc5LWMwZGZiM2NlYmJiMFwvZGczYW9zOS04MGM4MWMzYy1mNmRjLTQ2ZjUtOGYxMi00MDYwNDM0OWNhMzEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NnAsDeHYaZ10IoqbyDe0QiU1Hbc-qOjIkdsXT06EDVo" alt="" className="topAvatar"/>
        </div>
      </div>
    </div>
    
  );
};
