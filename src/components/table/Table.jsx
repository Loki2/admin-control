import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1123685,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 1143645,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1343985,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 1143970,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 1143453,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1143345,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1143155,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1123685,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 1143645,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1343985,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 1143970,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 1143453,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1143345,
      product: "Apple Macbook M1",
      img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/intro__ewz1ro7xs14y_large.jpg",
      customer: "Loki Sounikorn",
      date: "14 March",
      amount: 2390,
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];

  return (
    <TableContainer component={Paper} className="table__container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell" component="th" scope="row">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
