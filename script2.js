function insertRow(data) {
    let output = "";
  
    data.forEach((team, index) => {
        let row = `
            <div class="box1date">
            <div>${index + 1}</div>
            <div class="date1">${team.matchDateTime}</div>
            </div>`;
  
        output += row;
    });
  
    document.getElementById("containerID2").innerHTML = output;
  }

function loadData() {
    fetch("https://api.openligadb.de/getbltable/öbl1/2023/")
        .then((result) =>
            result.json()
        )
        .then((data) => {
            insertRow(data);
        });
  }
  
  loadData();