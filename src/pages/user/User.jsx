import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import "./user.css";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={"/newUser"}>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src=  "https://media.licdn.com/dms/image/D4D03AQGwpDaKfXtv2g/profile-displayphoto-shrink_200_200/0/1700375051308?e=1711584000&v=beta&t=_nXKjZAOxx6RqQjJu9vQ7aoWwz-_nOhwCRxiT883xX0"
              alt=""
              className="useShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Madhur Pathak</span>
              <span className="userShowUserTitle">Front-End-Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Deatails</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Madhur Pathak</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">17/07/1999</span>
            </div>
            <span className="userShowTitle">Contact Deatails</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+91 8960629039</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">
                madhurpathak000@gmail.com
              </span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New Delhi | India</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="MadhurPathak17"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Madhur Pathak"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="madhurpathak000@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91 8960629039"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New Delhi | India"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src=  "https://media.licdn.com/dms/image/D4D03AQGwpDaKfXtv2g/profile-displayphoto-shrink_200_200/0/1700375051308?e=1711584000&v=beta&t=_nXKjZAOxx6RqQjJu9vQ7aoWwz-_nOhwCRxiT883xX0"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  {" "}
                  <Publish className="userUpdateIcon" />{" "}
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton"> Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
