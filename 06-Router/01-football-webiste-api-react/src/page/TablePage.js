import React from "react";
import Header from "../components/Header";
import TablePattern from "../components/TablePattern";
import ApiDataTable from "../components/ApiDataTable";

export default function TablePage() {
  return (
    <div className="container">
      <Header />
      <TablePattern />
      <ApiDataTable />
    </div>
  )
}
