import { Visibility } from "@mui/icons-material";
import "./widgetsm.css";

export const WidgSm = () => {
  return (
    <div className="widgetsm">
      <span className="widgetsmTiltle">New Members</span>
      <ul className="widgetsmList">
        <li className="widgetsmListItem">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGwpDaKfXtv2g/profile-displayphoto-shrink_200_200/0/1700375051308?e=1711584000&v=beta&t=_nXKjZAOxx6RqQjJu9vQ7aoWwz-_nOhwCRxiT883xX0"
            alt=""
            className="widgetsmImg"
          />

          <div className="widgetsmUser">
            <span className="widgetsmuserName">Madhur Pathak</span>
            <span className="widgetsmuserTitle">FrontEnd Developer</span>
          </div>
          <button className="widgetsmButton">
            <Visibility className="widgetsmIcon" />
            Display
          </button>
        </li>
        <li className="widgetsmListItem">
          <img
            src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="widgetsmImg"
          />

          <div className="widgetsmUser">
            <span className="widgetsmuserName">Vishwajit Singh</span>
            <span className="widgetsmuserTitle">Backend Engineer</span>
          </div>
          <button className="widgetsmButton">
            <Visibility className="widgetsmIcon" />
            Display
          </button>
        </li>
        <li className="widgetsmListItem">
          <img
            src="https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="widgetsmImg"
          />

          <div className="widgetsmUser">
            <span className="widgetsmuserName">Mayank Tripathi</span>
            <span className="widgetsmuserTitle"> Manual Testing</span>
          </div>
          <button className="widgetsmButton">
            <Visibility className="widgetsmIcon" />
            Display
          </button>
        </li>
        <li className="widgetsmListItem">
          <img
            src="https://images.pexels.com/photos/2955247/pexels-photo-2955247.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="widgetsmImg"
          />

          <div className="widgetsmUser">
            <span className="widgetsmuserName">Antriksh Udaniya</span>
            <span className="widgetsmuserTitle"> UI/UX designer</span>
          </div>
          <button className="widgetsmButton">
            <Visibility className="widgetsmIcon" />
            Display
          </button>
        </li>
        <li className="widgetsmListItem">
          <img
            src="https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="widgetsmImg"
          />

          <div className="widgetsmUser">
            <span className="widgetsmuserName">Shivam Pateriya</span>
            <span className="widgetsmuserTitle">Data Analyst</span>
          </div>
          <button className="widgetsmButton">
            <Visibility className="widgetsmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};
