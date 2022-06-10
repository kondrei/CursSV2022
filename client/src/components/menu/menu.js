import CreateRoomBtn from "./create_room_btn";
import RoomRow from "./room_row";
import Score from "../room/score";
const Menu = ({ socket, rooms, socketName, score }) => {
  return (
    <div className="menu">
      <div className="card mt15 p15">Welcome, {socketName}</div>
      <div className="card mt20 p15">
        <div className="container">
          <p>Available Rooms</p>
          {rooms.map((room) => (
            <RoomRow key={room.name} socket={socket} name={room} />
          ))}
          <CreateRoomBtn socket={socket} />
          <Score socket={socket} score={score} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
