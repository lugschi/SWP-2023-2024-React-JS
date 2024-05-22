const express = require("express")
const db = require("./db")

const app = express();
app.use(express.json());
const port = 3000;


const data = [
    {name:"hans", age:17},
    {name:"peter", age:18},
    {name:"tom", age:16},
];

app.get("/people", async (req, res) =>{
    try {
        let result = await db.query("select * from person");
        console.log(result);
    } catch (error) {
        res.status(404).send(error.message);
    }    
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


app.post("/people", async (req,res)=>{
    let person = req.body;
    let sql = "insert into person values (id, ?, ?)";

    try {
        let result = await db.query(sql, [person.firstname, person.lastname]);
        console.log(result);
    } catch (error) {
        res.status(404).send(error.message);
    }  
});


app.put("/people/:id", (req, res) => {
    let id = req.params.id; 
        data[id] = req.body;
        res.send(data[id]);
        console.log("verändert");    
});


app.listen(port,()=>{
    console.log("Server runing on port " + port);
});