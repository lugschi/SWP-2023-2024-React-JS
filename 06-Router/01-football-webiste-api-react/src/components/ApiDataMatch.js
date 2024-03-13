import React from 'react'

export default function ApiDataMatch() {

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

    </div>
  )
}
