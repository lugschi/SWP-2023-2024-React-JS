const loadData = () =>{
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((result)=>{
        result.json().then((data)=>{
            fillTable(data);
        })
    })
};

const fillTable = (data) =>{
    
    let html = "";

    data.forEach(element => {
        html += "<div id = 'titleLeft2'> <div id = 'info3'><img src = '" + element.teamIconUrl+"'></div></div><div id = 'titleRight2'><div id = 'info4'>"+element.matches+" "+element.won+" "+element.draw+" </div></div>"
    });
    document.getElementById("container2").innerHTML = html;
}

loadData();