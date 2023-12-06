function insertRow(data) {
  let output = "";

  data.forEach((team, index) => {
      let row = `
          <div class="Team">
              <div class="TeamStats">
                  <div>${index + 1}</div>
                  
                  <div class="Icon-Name"><img class="" src="${team.teamIconUrl}" width="42" height="42"><div class="NameStyle">${team.teamName}</div></div>
              </div>
              <div class="StatStyle">
                  <div>${team.matches}</div>
                  <div>${team.won}</div>
                  <div>${team.draw}</div>
                  <div>${team.lost}</div>
                  <div>${team.goalDiff}</div>
                  <div>${team.points}</div>
              </div>
          </div>`;

      output += row;
  });

  document.getElementById("containerID").innerHTML = output;
}

function loadData() {
  fetch("https://api.openligadb.de/getbltable/öbl1/2023")
      .then((result) =>
          result.json()
      )
      .then((data) => {
          insertRow(data);
      });
}

loadData();