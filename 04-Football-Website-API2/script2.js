function insertRow(data) {
    let output = "";

    data.forEach((team, index) => {
        if (team.matchResults && team.matchResults.length >= 2) {
            let row = `
            <div class="fatherbox">
            <div class="motherbox">
                <div class="box1date">
                    <div class="games">
                    <div class="teamName1"><div class="NameStyle">${team.team1.teamName}</div><img src="${team.team1.teamIconUrl}" width="30" height="30"></div>
                    <div class="matchResult">${team.matchResults[1].pointsTeam1} - ${team.matchResults[1].pointsTeam2} </div>                    
                    <div class="teamName2"><img src="${team.team2.teamIconUrl}" width="30" height="30"><div class="NameStyle">${team.team2.teamName}</div></div>
                    </div>
                </div>
            </div>
            </div>`;

            output += row;
        } else {
            console.error(`Invalid data structure for team at index ${index}`);
        }
    });

    document.getElementById("containerID2").innerHTML = output;
}

function loadData() {
    fetch("https://api.openligadb.de/getmatchdata/öbl1/2023/")
        .then((result) => result.json())
        .then((data) => {
            insertRow(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

loadData();
