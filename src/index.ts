import { WebSocketServer } from "ws";
let wss = new WebSocketServer({ port: 8080 });
// Event handler
wss.on("connection", (socket)=>{
    
    setInterval(()=>{
        socket.send("Hello there"+ Math.random())
    } ,500)
})