import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Menu from "./components/menu/menu";
import Room from "./components/room/room";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [data, setData] = useState();
  const [score, setScore] = useState();

  useEffect(() => {
    const socket = io();

    socket.on("connected", () => {
      setConnectedSocket(socket);
    });

    socket.on("data", (receivedData) => {
      setData(receivedData);
    });

    socket.on('send-score', (score) => {
      setScore(score);
    });

  }, []);

  const content = () => {
    if (!(connectedSocket && data)) return null;

    const { room } = data;
    console.log(data)
    if (room === "menu") {
      return (
        <Menu
          socket={connectedSocket}
          rooms={data.availableRooms}
          socketName={data.socketName}
          score={score}
        />
      );
    }

    return <Room socket={connectedSocket} {...room} />;
  };

  return <div className="container">{content()}</div>;
}

export default App;
