import React from "react";
import Header from "../components/Header";
import TablePattern from "../components/TablePattern";
import ApiData from "../components/ApiData";

export default function TablePage() {
  return (
    <div className="container">
      <Header />
      <TablePattern />
      <ApiData />
    </div>
  )
}
