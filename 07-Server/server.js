const express = require("express")
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
const port = 3000;
app.use(bodyParser.json());


const data = [
    {name:"hans", age:17},
    {name:"peter", age:18},
    {name:"tom", age:16},
];

app.get("/people", (req, res) =>{
    res.send(data);
});

app.get("/people/:id", (req, res) =>{
    let id = req.params.id;
    res.send(data[id]);
});

app.delete("/people/:id", (req, res) => {
    let id = req.params.id;
    data.splice(id,1);
    res.send("done");
})


app.post("/people", (req,res)=>{
    data.push(req.body);
    res.send(req.body);
});

app.put("/people/:id", (req,res)=>{
    let id = req.params.id;
    res.send(data[id]);
    console.log("verändert");
})


app.listen(port,()=>{
    console.log("Server runing on port " + port);
});