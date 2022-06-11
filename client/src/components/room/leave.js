import { useState } from "react";

const Leave = (props) => {
  const [name, setName] = useState('');
  const [nameSend, seNameSend] = useState(false);

  const leaveRoom = () => {
    props.socket.emit("leave-room");
  };

  const addName = () => {
    if (name) {
      props.socket.emit("add-name", name);
      console.log(name);
      setName('');
      seNameSend(true);
    }
  }

  const enterName = () => {
    return (
      <div>
        <input
          type="text"
          placeholder="enter your name"
          onChange={e => setName(e.target.value)}
        />
        <button disabled={!name} onClick={addName}>Add to celebrity list</button>
      </div>
    )
  }

  return (
    <div className="card p15">
      {props.message}
      {props.message.search('won') > 0 && enterName()}
      {nameSend && <div>Your name was addet to the Hall of Fame!</div>}
      <button className="mt20" onClick={leaveRoom}>
        Leave Room!
      </button>
    </div>
  );
};

export default Leave;
