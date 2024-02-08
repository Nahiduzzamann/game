import { io } from "socket.io-client";
import url from ".";
const socket=io("https://40xbet.online", {
        autoConnect: true,
        protocols: ["http", "https"],
        withCredentials: true,
        transports: ["websocket"],
       
      });


export default socket;