import "./widgetlg.css";

export const WidgLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetlgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetlgTitle">Latest Transactions</h3>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/19421136/pexels-photo-19421136/free-photo-of-young-woman-sitting-in-the-driveway-leaning-against-a-car.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Customer A</span>
          </td>
          <td className="widgetlgDate">20 jan 2024</td>
          <td className="widgetlgAmount">Rs. 9000</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Customer B</span>
          </td>
          <td className="widgetlgDate">15 jan 2024</td>
          <td className="widgetlgAmount">Rs. 6000</td>
          <td className="widgetlgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Customer C</span>
          </td>
          <td className="widgetlgDate">2 jan 2024</td>
          <td className="widgetlgAmount">Rs. 4002</td>
          <td className="widgetlgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Customer D</span>
          </td>
          <td className="widgetlgDate">5 jan 2024</td>
          <td className="widgetlgAmount">Rs. 1200</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};
