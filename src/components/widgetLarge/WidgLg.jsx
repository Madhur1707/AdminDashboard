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
            <span className="widgetlgName">Student Carol</span>
          </td>
          <td className="widgetlgDate">2 July 2024</td>
          <td className="widgetlgAmount">Rs. 5000</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/19421136/pexels-photo-19421136/free-photo-of-young-woman-sitting-in-the-driveway-leaning-against-a-car.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Student Carol</span>
          </td>
          <td className="widgetlgDate">2 July 2024</td>
          <td className="widgetlgAmount">Rs. 5000</td>
          <td className="widgetlgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/19421136/pexels-photo-19421136/free-photo-of-young-woman-sitting-in-the-driveway-leaning-against-a-car.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Student Carol</span>
          </td>
          <td className="widgetlgDate">2 July 2024</td>
          <td className="widgetlgAmount">Rs. 5000</td>
          <td className="widgetlgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img
              src="https://images.pexels.com/photos/19421136/pexels-photo-19421136/free-photo-of-young-woman-sitting-in-the-driveway-leaning-against-a-car.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              alt=""
              className="widgetlgImg"
            />
            <span className="widgetlgName">Student Carol</span>
          </td>
          <td className="widgetlgDate">2 July 2024</td>
          <td className="widgetlgAmount">Rs. 5000</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};
