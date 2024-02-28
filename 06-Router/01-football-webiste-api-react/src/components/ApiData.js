import React, { useEffect, useState } from "react";

export default function ApiData() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    function loadData() {
      fetch("https://api.openligadb.de/getbltable/öbl1/2023")
        .then((result) => result.json())
        .then((data) => {
          setTableData(data);
        });
    }
    loadData();
  }, []);

  return (
      <div>
        {tableData.map((team, index) => (
          <div key={index} className="Team">
            <div className="TeamStats">
              <div>{index + 1}</div>
              <div className="Icon-Name">
                <img
                  className=""
                  src={team.teamIconUrl}
                  width="42"
                  height="42"
                  alt={team.teamName}
                />
                <div className="NameStyle">{team.teamName}</div>
              </div>
            </div>
            <div className="StatStyle">
              <div>{team.matches}</div>
              <div>{team.won}</div>
              <div>{team.draw}</div>
              <div>{team.lost}</div>
              <div>{team.goalDiff}</div>
              <div>{team.points}</div>
            </div>
          </div>
        ))}
      </div>
  );
}
