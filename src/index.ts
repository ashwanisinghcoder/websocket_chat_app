import { set } from "mongoose";
import { WebSocketServer } from "ws";
let wss = new WebSocketServer({ port: 8080 });
// Event handler
wss.on("connection", (socket)=>{
    socket.on("message" , (message)=>{
        if(message.toString()==="ping"){
            socket.send("pong");
        }
    })
})