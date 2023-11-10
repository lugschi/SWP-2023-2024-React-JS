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