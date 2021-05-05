const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const http = require("http");
const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname+ "/dist/angular-hosting-app" ));

app.get("/", (req, res) => {
   // res.send("hello siva");
   res.sendFile(path.join(__dirname+ "/dist/angular-hosting-app" ));
})
app.listen(3000, ()=>{
    console.log("server listining...");
})


/* const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/angular-hosting-app'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`)); */