import React, { useEffect, useState } from "react";

export default function ApiDataMatch() {
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    function loadData() {
      fetch("https://api.openligadb.de/getmatchdata/öbl1/2023/")
        .then((result) => result.json())
        .then((data) => {
          setMatchData(data);
        });
    }
    loadData();
  }, []);

  return (
    <div>
      {matchData.map((match, index) => (
        <div className="fatherbox" key={index}>
          <div className="motherbox">
            <div className="box1date">
              <div className="games">
                <div className="teamName1">
                  <div className="NameStyle">{match.team1.teamName}</div>
                  <img
                    src={match.team1.teamIconUrl}
                    alt={match.team1.teamName}
                    width="30"
                    height="30"
                  />
                </div>
                {match.matchResults.length >= 2 && (
                  <div className="matchResult">
                    {match.matchResults[1].pointsTeam1} -{" "}
                    {match.matchResults[1].pointsTeam2}
                  </div>
                )}
                <div className="teamName2">
                  <img
                    src={match.team2.teamIconUrl}
                    alt={match.team2.teamName}
                    width="30"
                    height="30"
                  />
                  <div className="NameStyle">{match.team2.teamName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
