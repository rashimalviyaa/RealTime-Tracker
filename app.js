const express= require('express');
const app= express();
const path=require("path");

//socketio configuration
const http= require("http");

const socketio= require("socket.io");

const server= http.createServer(app);

const io=socketio(server);



//setup ejs

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "public")));

io.on("connection",function(socket){
    console.log("connected");
});

app.get("/", function(req,res){
    res.render("index")
})

server.listen(3000);