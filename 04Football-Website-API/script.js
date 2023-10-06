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
        html += "<div class = 'style'> <img src = '" + element.teamIconUrl+"' / <div class = 'container'><p class = 'matches'>"+element.matches+" "+element.won+" "+element.draw+" </p></div></div>"
    });
    document.getElementById("output").innerHTML = html;
}

loadData();